import React from 'react';

// Components
import About from "./About"
import Contact from './Contact';




function Main({toggleDisplay}) {

  const handleClick = () => {
    window.scrollTo({ top: 722, behavior: 'smooth' });
  };

  return (
    <div className='sec-main'>
      <div className="sec-title dot-grid">
        <img src="./assets/images/black-hole-particle-512px.webp" alt="Animated sequence of a black hole"></img>
        <h1>Travelling faster than light, at the speed of thought.</h1>
        <button onClick={handleClick}>
          LEARN MORE
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
          </svg>
        </button>
      </div>
      <About toggleDisplay={toggleDisplay}/>
      <Contact />
    </div>
  );
}

export default Main;