import React from 'react';

import imgAvatar from '../assets/images/me.png';





function About({toggleDisplay}) {

  return (
    <div className="sec-about-me">
      <div className="sec-about-me-grid">
        <div>
          <img src={imgAvatar} alt="Blurred out my self."></img>
        </div>
        <div>
          <h1>“You can't control something you don't understand”</h1>
          <h4 className="ibm-plex-sans-semibold">- ME.</h4>
        </div>
        <div>
          <p className="body-02">
            Coding, problem-solving, and tackling new challenges have always been my form of meditation. 
            From a young age, I've been captivated by technology and hardware, constantly exploring 
            their intricacies and possibilities. In my downtime, I enjoy indulging in movies and music, 
            finding inspiration and relaxation in their stories and melodies.
          </p>
        </div>
        <div>
          <button onClick={toggleDisplay}>
            RESUME
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;