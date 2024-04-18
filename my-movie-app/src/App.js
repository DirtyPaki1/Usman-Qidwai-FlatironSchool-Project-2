import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import MovieList from './components/MovieList';
import AddMovieForm from './components/AddMovieForm';

function App() {
 return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/movies" component={MovieList} />
        <Route path="/add-movie" element={<AddMovieForm />} />
    
      
      </Routes>
    </Router>
    
 );
}

export default App;