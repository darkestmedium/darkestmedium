import React from 'react';




function About({toggleDisplay}) {

  return (
    <div className="sec-about-me">
      <div className="sec-about-me-grid">
        <div>
          <img src="./assets/images/me.png" alt="Blurred out my self."></img>
        </div>
        <div>
          <h1>“You can't control something you don't understand”</h1>
          <h4 className="ibm-plex-sans-semibold">- ME.</h4>
        </div>
        <div>
          <p className="body-02">I like to code, solve problems and face new challenges - it's a form of meditation.</p>
          <p className="body-02">
            Since the youngest age obssesed with technology and hardware.
            In the mean time I like to watch movies and listen to music.
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