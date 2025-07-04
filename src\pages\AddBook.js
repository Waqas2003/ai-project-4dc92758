import React, { useState } from 'react';

function AddBook() {
  const [title, setTitle] = useState('');
  const [authorId, setAuthorId] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    fetch('/api/books', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, authorId }),
    })
      .then(response => response.json())
      .then(data => console.log(data));
  };

  return (
    <div>
      <h1>Add Book</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={event => setTitle(event.target.value)} />
        </label>
        <br />
        <label>
          Author:
          <select value={authorId} onChange={event => setAuthorId(event.target.value)}>
            <option value="">Select Author</option>
            {/* authors list will be populated here */}
          </select>
        </label>
        <br />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;