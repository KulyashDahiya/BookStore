// src/components/BookById.js
import React, { useState } from 'react';
import { TextField, Button, Paper, Typography } from '@mui/material';

function GetBookById() {
    const [bookId, setBookId] = useState('');
    const [book, setBook] = useState(null);
    const [error, setError] = useState(null);

    const handleSearch = () => {
        fetch(`http://127.0.0.1:8000/get-book?book_id=${bookId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Book not found');
                }
                return response.json();
            })
            .then(data => setBook(data.book))
            .catch(error => setError(error.message));
    };

    return (
        <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
            <Typography variant="h5">Get Book by ID</Typography>
            <TextField
                label="Enter book ID"
                variant="outlined"
                fullWidth
                value={bookId}
                onChange={e => setBookId(e.target.value)}
                sx={{ marginBottom: 2 }}
            />
            <Button variant="contained" color="primary" onClick={handleSearch}>
                Get Book
            </Button>
            {error && <Typography variant="body1" color="error">{error}</Typography>}
            {book && (
                <div>
                    <Typography variant="h6">{book.title}</Typography>
                    <Typography variant="body1">Price: ${book.price}</Typography>
                    <Typography variant="body1">Genre: {book.genre}</Typography>
                </div>
            )}
        </Paper>
    );
}

export default GetBookById;
