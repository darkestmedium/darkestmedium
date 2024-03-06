import React from 'react';




function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div><p>Darkest Medium ⓒ {currentYear}</p></div>
      <ul>
        <li><a href="https://github.com/darkestmedium"><img src="./assets/icons/github.svg" alt="GitHub"></img></a></li>
      </ul>
    </footer>
  );
}

export default Footer;