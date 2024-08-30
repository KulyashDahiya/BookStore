
# Bookstore Application

This is a Bookstore application built using FastAPI for the backend and React with Material UI for the frontend. The application allows users to view a list of books, add new books, fetch book details by ID, and get a random book from the list.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Front-End Components](#front-end-components)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Book List**: View all available books with details like title, price, genre, and book ID.
- **Add Book**: Add new books to the bookstore by providing title, price, and genre.
- **Get Book by ID**: Fetch details of a specific book using its ID.
- **Get Random Book**: Fetch a random book from the available list.

## Technologies Used

### Backend:
- **FastAPI** (Python)
- **Uvicorn** (ASGI server)

### Frontend:
- **React** (JavaScript)
- **Material UI** (UI Framework)

### Database:
- Static JSON File

### Environment:
- **React (JavaScript)** (for frontend)
- **Python** (for backend)

## Setup Instructions

### Backend Setup

1. **Clone the Repository:**
   \`\`\`bash
   git clone <Repo URL>
   cd bookstore/backend
   \`\`\`

2. **Create and Activate a Python Virtual Environment:**
   \`\`\`bash
   python3 -m venv env
   source env/bin/activate
   \`\`\`

3. **Install the Backend Dependencies:**
   \`\`\`bash
   pip install -r requirements.txt
   \`\`\`

4. **Run the FastAPI Server:**
   \`\`\`bash
   uvicorn main:app --reload
   \`\`\`
   The backend will be running at \`http://127.0.0.1:8000\`.

### Frontend Setup

1. **Navigate to the Frontend Directory:**
   \`\`\`bash
   cd ../frontend
   \`\`\`

2. **Install the Frontend Dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

3. **Run the React Application:**
   \`\`\`bash
   npm start
   \`\`\`
   The frontend will be running at \`http://localhost:3000\`.

## Running the Application

1. Start the FastAPI server by following the backend setup instructions.
2. Start the React application by following the frontend setup instructions.
3. Open your browser and navigate to \`http://localhost:3000\` to interact with the application.

## API Endpoints

- **GET /list-books** - Fetches the list of all books.
- **POST /add-book** - Adds a new book to the list.
- **GET /get-book?book_id={book_id}** - Fetches details of a book by its ID.
- **GET /get-random-book** - Fetches a random book from the list.

## Front-End Components

(Add details of the front-end components here, such as BookList, BookForm, BookDetails, etc.)

## Future Enhancements

- **Search Functionality**: Add a search feature to find books by title, author, or genre.
- **User Authentication**: Implement user login and registration.
- **Book Reviews**: Allow users to leave reviews and ratings for books.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any changes or enhancements.

## License

This project is for personal use and is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
