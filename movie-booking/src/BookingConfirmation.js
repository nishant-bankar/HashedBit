import React from 'react';
import { useLocation } from 'react-router-dom';

function BookingConfirmation() {
  const location = useLocation();
  const { name, email, mobile, bookingId } = location.state;

  return (
    <div>
      <h1>Seat Booked Successfully!</h1>
      <p>Booking ID: {bookingId}</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Mobile: {mobile}</p>
    </div>
  );
}

export default BookingConfirmation;
