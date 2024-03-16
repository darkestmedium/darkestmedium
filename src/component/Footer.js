import React from 'react';

import './Footer.css'

import imgGitHub from "../assets/icons/github.svg"




function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='footer'>
      <div><p>ⓒ {currentYear} Darkest Medium</p></div>
      <ul>
        <a href="https://github.com/darkestmedium"><img src={imgGitHub} alt="GitHub"></img></a>
      </ul>
    </footer>
  );
}

export default Footer;