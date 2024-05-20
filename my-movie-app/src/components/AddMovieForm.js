


import React, { useState } from 'react';


const AddMovieForm = ({ addMovie }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const configObj = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title })
    };
    try {
      const res = await fetch('http://localhost:3001/movies', configObj);
      const data = await res.json();
      addMovie(data);
    } catch (error) {
      console.error(error);
    }
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovieForm;
