import React from 'react';

import './EntryThought.scss'




function EntryThought(props) {

  return (
    <div className="sec-thought-grid">
      <div className="item1">
        <h1>{props.title}</h1>
      </div>
      {/* <div></div> */}
      <div className="item2">
        <h4 className="ibm-plex-sans-semibold">{props.quoted}</h4>
      </div>
      <div></div>
      {/* <div className="item2">
        <p className="body-02">{props.content}</p>
      </div>
      <div></div> */}
    </div>
  );
}

export default EntryThought;