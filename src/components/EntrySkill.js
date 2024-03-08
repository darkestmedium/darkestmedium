import React from 'react';




function EntrySkill(props) {

  return (
    <div class="skill-item-grid">
      <img class="svg-invert" src={props.img}></img>
      <p>{props.skill}</p>
    </div>
  );
}

export default EntrySkill;