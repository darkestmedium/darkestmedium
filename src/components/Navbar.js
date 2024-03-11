import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css'




function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/"><h4>DARKEST MEDIUM</h4></Link>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/resume">Resume</Link>
      </ul>
    </nav>
  );
}

export default Navbar;
