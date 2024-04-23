import React, { useState } from 'react';

function AddMovieForm({ movies }) {
 const [searchTitle, setSearchTitle] = useState('');

 const handleSearch = (event) => {
    event.preventDefault();
    // Assuming you have a function to find a movie by title
    const foundMovie = movies.find(movie => movie.title === searchTitle);
    console.log(foundMovie);
 };

 return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
        placeholder="Search movie title"
      />
  

      <button type="submit">Search Movie</button>
    
    </form>
 );
}

export default AddMovieForm;



