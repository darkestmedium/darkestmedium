// import React from 'react';
import { React, useState } from 'react';

// Components
import About from "../About"
import Contact from '../Contact';


import imgBlackHole from '../../assets/images/bhp-static-512px.webp';
import seqBlackHole from '../../assets/images/bhp-512px.webp';

// import Button from '@mui/material/Button';





function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleClick = () => {
    window.scrollTo({ top: 722, behavior: 'smooth' });
  };

  return (
    <div className='sec-main'>
      <div className="sec-title dot-grid">
        {/* <img src={seqBlackHole} alt="Animated sequence of a black hole"></img> */}
        <img
          src={imgBlackHole}
          alt="Placeholder"
          style={{ display: imageLoaded ? 'none' : 'block' }}
        />
        <img
          src={seqBlackHole}
          alt="Animated sequence of a black hole"
          style={{ display: imageLoaded ? 'block' : 'none' }} // Show only when large image is loaded
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
        <h1>Travelling faster than light, at the speed of thought.</h1>
        {/* <Button variant="text">LEARN MORE</Button> */}
        <button onClick={handleClick}>
          LEARN MORE
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
          </svg>
        </button>
      </div>
      <About/>
      <Contact />
    </div>
  );
}

export default Home;