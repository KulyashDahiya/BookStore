import React from 'react';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import GetBookById from './components/GetBookById';  // Correcting the import name
import RandomBook from './components/RandomBook';

function App() {
    return (
        <div>
            <h1>Welcome to My Bookstore!!!</h1>
            <BookList />
            <RandomBook />
            <AddBook />
            <GetBookById />
        </div>
    );
}

export default App;
