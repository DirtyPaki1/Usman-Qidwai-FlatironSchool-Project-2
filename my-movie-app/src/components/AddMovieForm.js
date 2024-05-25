


import React, { useState } from 'react';


const AddMovieForm = ( { addMovie }) => {
  const [title, setTitle] = useState('');
   
  const handleSubmit = async (e) => {
  console.log(e)
    e.preventDefault();
    const configObj = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json','Accept':'application/json' },
      body: JSON.stringify({ title })
    };
    try {
      const res = await fetch('http://localhost:3001/movies', configObj);
      const data = await res.json();
      console.log(data)
      addMovie(data);
    } catch (error) {
      console.log(error);
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
