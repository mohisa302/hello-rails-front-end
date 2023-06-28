import React, { useEffect, useState } from 'react';

function Greeting() {
  const [greeting, setGreeting] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/api/random_greeting')
      .then((response) => response.json())
      .then((data) => setGreeting(data.greeting))
      .catch((error) => setError(error));
  }, []);

  return (
    <div className="home">
      <h1>Random Greeting</h1>
      {error ? (
        <p>
          Error:
          {error.toString()}
        </p>
      ) : (
        <p>{greeting}</p>
      )}
    </div>
  );
}

export default Greeting;
