import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BookSeat() {
  const [form, setForm] = useState({ name: '', email: '', mobile: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/confirmation', {
      state: { ...form, bookingId: Math.floor(Math.random() * 1000000) },
    });
  };

  return (
    <div>
      <h1>Book Seat</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Mobile:</label>
          <input type="text" name="mobile" value={form.mobile} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BookSeat;
