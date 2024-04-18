import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
    console.log('Navbar');
    return (
       <nav>
         <ul>
           <li><Link to="/">Home</Link></li>
           <li><Link to="./About.js">About</Link></li>
           <li><Link to="./Contact">Contact</Link></li>
           <li> <Link to="./AddMovieForm.js">Add Movies</Link></li>
           
         </ul>
       </nav>
    );
   }
   export default Navbar;