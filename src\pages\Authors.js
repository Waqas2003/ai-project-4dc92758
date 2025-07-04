import React from 'react';
import { Table } from 'react-bootstrap';

function Authors({ authors }) {
  return (
    <div>
      <h1>Authors</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {authors.map(author => (
            <tr key={author.id}>
              <td>{author.id}</td>
              <td>{author.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Authors;