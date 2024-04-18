import React, { useState } from 'react';

function AddMovieForm() {
 const [title, setTitle] = useState('');

 const handleSubmit = (event) => {
    event.preventDefault();
    
   
const newMovie = { title: "Interstellar" };
console.log(newMovie)

 };

 return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Movie title"
      />
      <button type="submit">Add Movie</button>
    </form>
 );
}

export default AddMovieForm;
