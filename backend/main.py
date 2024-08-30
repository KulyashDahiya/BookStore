from fastapi import FastAPI, HTTPException
import random, os, json
from pydantic import BaseModel
from uuid import uuid4
from typing import Optional, Literal
import asyncio
from fastapi.encoders import jsonable_encoder
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Adjust to your frontend's URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Book(BaseModel):
    title: str
    price: float
    genre: Literal["fiction", "non-fiction"]
    book_id: Optional[str] = uuid4().hex

BOOK_DATABASE = []

BOOKS_FILE = "books.json"

# Function to load books from file
def load_books_from_file():
    global BOOK_DATABASE
    try:
        if os.path.exists(BOOKS_FILE):
            with open(BOOKS_FILE, "r") as file:
                BOOK_DATABASE = json.load(file)
    except (IOError, json.JSONDecodeError) as e:
        print(f"Error loading books: {e}")

# Load books initially
load_books_from_file()

# Function to periodically refresh the book database
async def refresh_book_database():
    while True:
        load_books_from_file()
        await asyncio.sleep(60)  # Sleep for 1 minute

# Start the background refresh task
@app.on_event("startup")
async def on_startup():
    asyncio.create_task(refresh_book_database())


@app.get("/")
async def root():
    return {"Message" : "Welcome to my Bookstore!", "Total Books" : len(BOOK_DATABASE)}

#list-books
@app.get("/list-books")
async def list_books():
    return BOOK_DATABASE

# book-by-index/{index} /book-by-index/0
@app.get("/book-by-index/{index}")
async def book_by_index(index: int):
    if index < 0 or index >= len(BOOK_DATABASE):
        raise HTTPException(404, f"Index {index} out of Range {len(BOOK_DATABASE)}")
    else:
        return {"book" : BOOK_DATABASE[index]}

# get-random-book
@app.get("/get-random-book")
async def get_random_book():
    if not BOOK_DATABASE:
        raise HTTPException(404, "No books available")
    return {"book" : random.choice(BOOK_DATABASE)}

# add-book
@app.post("/add-book")
async def add_book(book: Book):
    book.book_id = uuid4().hex

    json_book = jsonable_encoder(book)
    BOOK_DATABASE.append(json_book)

    with open(BOOKS_FILE, "w") as file:
        json.dump(BOOK_DATABASE, file, indent=4)

    return {"message" :  "Book Added Successfully"}

# Get a book by ID
@app.get("/get-book")
async def get_book(book_id: str):
    book = next((b for b in BOOK_DATABASE if b["book_id"] == book_id), None)
    if book is None:
        raise HTTPException(404, f"Book with ID {book_id} not found")
    return {"book": book}
