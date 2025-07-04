import React from 'react';

function BookDetails({ match }) {
  const bookId = match.params.id;
  const [book, setBook] = useState({});

  useEffect(() => {
    fetch(`/api/books/${bookId}`)
      .then(response => response.json())
      .then(data => setBook(data));
  }, [bookId]);

  return (
    <div>
      <h1>Book Details</h1>
      <p>Title: {book.title}</p>
      <p>Author: {book.author.name}</p>
    </div>
  );
}

export default BookDetails;