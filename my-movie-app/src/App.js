import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import MovieList from './components/MovieList';
import AddMovieForm from './components/AddMovieForm';
import React, { useState } from 'react';

function App() {
  const [movies, setMovies] = useState([
     { title: 'The Matrix' },
     { title: '21 Jump Street' },
     { title: '22 Jump Street' },

  ]);
 
  const addMovie = (newMovie) => {
     setMovies([...movies, newMovie]);
  };
 
  // Example usage of addMovie
  addMovie({ title: 'New Movie' });
 
  return (
     <Router>
       <Navbar />
       <Routes>
         <Route path="/" exact component={Home} />
         <Route path="/about" component={About} />
         <Route path="/contact" component={Contact} />
         <Route path="/movies" component={MovieList} />
         <Route path="/add-movie" element={<AddMovieForm addMovie={addMovie} />} />
       </Routes>
       <div>
         <h1>Search for a Movie</h1>
         <AddMovieForm movies={movies} />
       </div>
     </Router>
  );
 }
 

export default App;



