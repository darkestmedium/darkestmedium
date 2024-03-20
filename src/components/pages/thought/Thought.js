import React from 'react';
import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import './Thought.scss';

import thoughtEntries from './Thoughts'
import EntryThought from './EntryThought'
// import imgAvatar from '../../assets/images/me.png';


// Get lenArray;
// shuffle array


function shuffleArray() {
  const lenArray = thoughtEntries.length;
  const array = Array.apply(null, Array(lenArray)).map(function (x, i) { return i; });
  const shuffledArray = [...array];
  for (let i = lenArray - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

let arrayShuffled = shuffleArray();
let indx;

function getIndex() {
  indx = arrayShuffled[0];
  arrayShuffled.shift();
  if (arrayShuffled.length === 0) {
    arrayShuffled = shuffleArray();
    console.log(`Shuffled new array... ${arrayShuffled}`);
  }
}


function Thought() {

  const [entry, setEntry] = useState(0);

  useEffect(() => {
    // Set an initial entry when the component mounts, The effect runs only once due to the empty dependency array ([]).
    getIndex();
    setEntry(thoughtEntries[indx]);
  }, []);


  const handleClick = () => {
    getIndex();
    setEntry(thoughtEntries[indx]);
  };


  return (
    <div className="sec-thought">
      <EntryThought
        title = {entry.title}
        quoted = {entry.quoted}
        // content = {entry.content}
        key = {entry.id}
      />
      <button onClick={handleClick}>New Thought</button>
    </div>
  );
}

export default Thought;