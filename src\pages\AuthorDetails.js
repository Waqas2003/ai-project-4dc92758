import React from 'react';

function AuthorDetails({ match }) {
  const authorId = match.params.id;
  const [author, setAuthor] = useState({});

  useEffect(() => {
    fetch(`/api/authors/${authorId}`)
      .then(response => response.json())
      .then(data => setAuthor(data));
  }, [authorId]);

  return (
    <div>
      <h1>Author Details</h1>
      <p>Name: {author.name}</p>
    </div>
  );
}

export default AuthorDetails;