import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';

import imgAvatar from '../../assets/images/me.png';




function About() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/resume");
    window.scrollTo({top: 0, behavior: 'smooth'});
  };


  return (
    <div className="sec-about">
      <div className="sec-about-grid">
        <div class="grid-item item1">
          <h1>“You can't control something you don't understand”</h1>
        </div>
        <div></div>
        <div>
          <h4 className="ibm-plex-sans-semibold">- ME.</h4>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div class="grid-item item2">
          <p className="body-02">
            Coding, problem-solving, and tackling new challenges have always been my form of meditation. 
            From a young age, I've been captivated by technology and hardware, constantly exploring 
            their intricacies and possibilities. In my downtime, I enjoy indulging in movies and music, 
            finding inspiration and relaxation in their stories and melodies.
          </p>
        </div>
        <div>
          <img src={imgAvatar} alt="Blurred out my self."></img>
        </div>
      </div>
    </div>
  );
}

export default About;