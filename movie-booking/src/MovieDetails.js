import React from 'react';
import { Link, useParams } from 'react-router-dom';

const movies = [
  { id: 1, title: 'Joker', description: 'During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure' },
  { id: 2, title: 'Pushpa', description: 'a coolie who rises in a syndicate that smuggles red sandalwood, a rare wood that grows only in the Seshachalam Hills of Andhra Pradesh' },
  { id: 3, title: 'Avengers', description: 'Earth mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity' },
  // Add more movie objects here
];

function MovieDetails() {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <Link to="/book-seat">
        <button>Book Seat</button>
      </Link>
    </div>
  );
}

export default MovieDetails;
