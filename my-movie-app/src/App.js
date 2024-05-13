import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import About from './components/About';
import Contact from './components/Contact';
import MovieList from './components/MovieList';
import AddMovieForm from './components/AddMovieForm';
import Home from './components/Home';

function App() {
 const [movies, setMovies] = useState([
    { title: 'The Matrix' },
    { title: '21 Jump Street' },
    { title: '22 Jump Street' },
    {title:'Ghost Rider'},
    {title:'Avatar'}
 ]);

 const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
 };

 useEffect(() => {
  console.log(movies);
}, [movies])


 return (
    
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <AddMovieForm addMovie={addMovie} />
              <MovieList movies={movies} />
              <Home/>
              
             
            </>
          } />
         <Route path="/movies" element={<MovieList movies={movies} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/AddMovieForm" element={<AddMovieForm />} />

          

          
         
        
        </Routes>
        
    
      </Router>
          
      
    
 );
}


//App ovie form is our

export default App;

