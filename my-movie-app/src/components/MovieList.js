


// import React, { useState, useEffect } from 'react';

// function MovieList() {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:3000/movies')
//      .then(response => response.json())
//      .then(data => setMovies(data));
//   }, []);

//   return (
//     <div>
//       <h1>Movies</h1>
//       <ul>
//         {movies.map(movie => (
//           <li key={movie.id}>{movie.title} ({movie.year})</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default MovieList;

import React from 'react';

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
};

export default MovieList;
