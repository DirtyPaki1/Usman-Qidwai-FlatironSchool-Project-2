
import React, { useState } from 'react';

function AddMovieForm({ movies }) {
    const [searchTerm, setSearchTerm] = useState('');
   
    const filteredMovies = (movies || []).filter(movie => {
       return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
   
    return (
       <div>
         <input
           type="text"
           placeholder="Search movies"
           value={searchTerm}
           onChange={e => setSearchTerm(e.target.value)}
         />
         <ul>
           {filteredMovies.map(movie => (
             <li key={movie.id}>{movie.title}</li>
           ))}
         </ul>
       </div>
     
    );
}

export default AddMovieForm;
