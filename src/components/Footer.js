import React from 'react';

import imgGitHub from "../assets/icons/github.svg"




function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div><p>Copyright ⓒ {currentYear} Darkest Medium</p></div>
      <ul>
        <li><a href="https://github.com/darkestmedium"><img src={imgGitHub} alt="GitHub"></img></a></li>
      </ul>
    </footer>
  );
}

export default Footer;