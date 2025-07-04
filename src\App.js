import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Books from './pages/Books';
import Authors from './pages/Authors';
import BookDetails from './pages/BookDetails';
import AuthorDetails from './pages/AuthorDetails';
import AddBook from './pages/AddBook';
import AddAuthor from './pages/AddAuthor';

function App() {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetch('/api/books')
      .then(response => response.json())
      .then(data => setBooks(data));

    fetch('/api/authors')
      .then(response => response.json())
      .then(data => setAuthors(data));
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/books" component={() => <Books books={books} />} />
        <Route path="/authors" component={() => <Authors authors={authors} />} />
        <Route path="/books/:id" component={BookDetails} />
        <Route path="/authors/:id" component={AuthorDetails} />
        <Route path="/add-book" component={AddBook} />
        <Route path="/add-author" component={AddAuthor} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;