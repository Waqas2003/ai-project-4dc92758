import React, { useState } from 'react';

function AddAuthor() {
  const [name, setName] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    fetch('/api/authors', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    })
      .then(response => response.json())
      .then(data => console.log(data));
  };

  return (
    <div>
      <h1>Add Author</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={event => setName(event.target.value)} />
        </label>
        <br />
        <button type="submit">Add Author</button>
      </form>
    </div>
  );
}

export default AddAuthor;
```

This is a basic library management system with CRUD operations for books and authors. It uses React Router for client-side routing and React Bootstrap for styling. The backend API is not included in this example, but it would typically involve creating a RESTful API using a framework like Express.js or Django.