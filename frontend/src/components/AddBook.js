// src/components/AddBook.js
import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, MenuItem } from '@mui/material';

function AddBook() {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [genre, setGenre] = useState('fiction');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newBook = { title, price: parseFloat(price), genre };

        fetch('http://127.0.0.1:8000/add-book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newBook),
        })
            .then(response => response.json())
            .then(data => alert(data.message))
            .catch(error => alert(`Failed to add book: ${error.message}`));
    };

    return (
        <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
            <Typography variant="h5">Add a New Book</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Title"
                    variant="outlined"
                    fullWidth
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    sx={{ marginBottom: 2 }}
                />
                <TextField
                    label="Price"
                    type="number"
                    variant="outlined"
                    fullWidth
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                    sx={{ marginBottom: 2 }}
                />
                <TextField
                    label="Genre"
                    select
                    variant="outlined"
                    fullWidth
                    value={genre}
                    onChange={e => setGenre(e.target.value)}
                    sx={{ marginBottom: 2 }}
                >
                    <MenuItem value="fiction">Fiction</MenuItem>
                    <MenuItem value="non-fiction">Non-Fiction</MenuItem>
                </TextField>
                <Button variant="contained" color="primary" type="submit">
                    Add Book
                </Button>
            </form>
        </Paper>
    );
}

export default AddBook;
