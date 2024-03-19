import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss'

import svgLogo from '../assets/icons/square.svg'




function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/"><img className="svg-img" src={svgLogo} alt="Logo" /></Link>
      <Link to="/">DARKEST MEDIUM</Link>
      <ul>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </ul>
    </nav>
  );
}

export default Navbar;
