
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
       <nav>
         <ul>
           <li><NavLink to="/" className="nav-link">Home</NavLink></li>
           <li><NavLink to="/about" className="nav-link">About</NavLink></li>
           <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
           <li><NavLink to="/add-movie-form" className="nav-link">Add Movies</NavLink></li>
         </ul>
       </nav>
    );
}

export default Navbar;


