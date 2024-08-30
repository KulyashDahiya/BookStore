import React, { useState, useEffect } from 'react';
import { Typography, List, ListItem, ListItemText, Paper } from '@mui/material';

function BookList() {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/list-books')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to load books');
                }
                return response.json();
            })
            .then(data => setBooks(data))
            .catch(error => setError(error.message));
    }, []);

    if (error) {
        return <Typography color="error">Error: {error}</Typography>;
    }

    return (
        <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
            <Typography variant="h5">Book List</Typography>
            {books.length === 0 ? (
                <Typography>No books available</Typography>
            ) : (
                <List>
                    {books.map(book => (
                        <ListItem key={book.book_id}>
                            <ListItemText
                                primary={`${book.title} - $${book.price}`}
                                secondary={`Book ID: ${book.book_id} | Genre: ${book.genre}`}
                            />
                        </ListItem>
                    ))}
                </List>
            )}
        </Paper>
    );
}

export default BookList;
