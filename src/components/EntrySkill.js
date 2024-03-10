import React from 'react';




function EntrySkill(props) {

  return (
    <div className="skill-item-grid">
      <img className="svg-invert" src={props.img} alt={props.alt}></img>
      <p>{props.skill}</p>
    </div>
  );
}

export default EntrySkill;