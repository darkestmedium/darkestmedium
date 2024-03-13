import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css'

import svgLogo from '../assets/icons/square.svg'




function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/"><img className="svg-img" src={svgLogo} alt="Logo" /></Link>
      <ul>
        <Link to="/resume">Resume</Link>
      </ul>
    </nav>
  );
}

export default Navbar;
