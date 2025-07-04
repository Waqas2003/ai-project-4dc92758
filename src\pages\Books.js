import React from 'react';
import { Table } from 'react-bootstrap';

function Books({ books }) {
  return (
    <div>
      <h1>Books</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Books;