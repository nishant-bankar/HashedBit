import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import MovieDetails from './MovieDetails';
import BookSeat from './BookSeat';
import BookingConfirmation from './BookingConfirmation';
import './index.css';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/book-seat" element={<BookSeat />} />
      <Route path="/confirmation" element={<BookingConfirmation />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
