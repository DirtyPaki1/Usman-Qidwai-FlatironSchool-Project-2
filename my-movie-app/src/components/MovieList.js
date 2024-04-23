// MovieList.js
import React, { useState, useEffect } from 'react';

function MovieList() {
 const [movies, setMovies] = useState([]);

 useEffect(() => {
    fetch('')
      .then(response => response.json())
      .then(data => setMovies(data));
 }, []);


 

 return (
    <div>
      {movies.map(movie => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </div>
 );
}

export default MovieList;
