import React from 'react';
import './Contact.css';




function Contact() {

  const handleClick = () => {
    window.location.href = "mailto:darkestmedium@pm.me";
  };

  return (
    <div className="sec-contact">
      <div className="sec-contact-grid">
        <div class="grid-item contact-item1">
          <h1>Want to get in touch?</h1>
        </div>
        <div className='sec-contact-grad grid-item contact-item2'></div>
        <div></div>
        <div></div>
        <div></div>
        <div class="grid-item contact-item3">
          <button onClick={handleClick}>
            CONTACT ME
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;