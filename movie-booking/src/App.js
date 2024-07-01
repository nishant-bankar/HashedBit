import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const movies = [
  { id: 1, title: 'Movie 1', image: 'Joker.jpeg' },
  { id: 2, title: 'Movie 2', image: 'Pushpa.jpeg' },
  { id: 3, title: 'Movie 3', image: 'Avengers.jpeg' },
  // Add more movie objects here
];

function App() {
  return (
    <div className="App">
      <h1>Movies List</h1>
      <div className="movies-grid">
        {movies.map(movie => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <div className="movie-item">
              <img src={movie.image} alt={movie.title} />
              <h2>{movie.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default App;
