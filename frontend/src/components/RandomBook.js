import React, { useState } from 'react';
import { Button, Typography, Paper } from '@mui/material';

function RandomBook() {
    const [book, setBook] = useState(null);
    const [error, setError] = useState(null);

    const fetchRandomBook = () => {
        fetch('http://127.0.0.1:8000/get-random-book')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to load random book');
                }
                return response.json();
            })
            .then(data => setBook(data.book))
            .catch(error => setError(error.message));
    };

    return (
        <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
            <Typography variant="h5">Get a Random Book</Typography>
            <Button variant="contained" color="primary" onClick={fetchRandomBook} style={{ marginTop: '8px' }}>
                Get Random Book
            </Button>
            {error && <Typography color="error">Error: {error}</Typography>}
            {book && (
                <div style={{ marginTop: '16px' }}>
                    <Typography variant="h6">{book.title}</Typography>
                    <Typography>Price: ${book.price}</Typography>
                    <Typography>Genre: {book.genre}</Typography>
                </div>
            )}
        </Paper>
    );
}

export default RandomBook;
