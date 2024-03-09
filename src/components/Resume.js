import React from 'react';

// Components
import Entry from './Entry';
import EntrySkill from './EntrySkill';
import EntryLink from './EntryLink';
import EntryWork from './EntryWork';

import {workEntries, educationEntires, licCertEntries, skillEntries} from "../data/resume-entries"





function Resume({toggleDisplay}) {

  return (
    <div className='sec-resume'>
      <button className="btn-back-to-main" onClick={toggleDisplay}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
        </svg>
        BACK TO MAIN
      </button>
      <div className="sec-info">
        <h1>Lukasz Biernat</h1>
        <div className="sec-info-grid">
          <div>darkestmedium@pm.me</div>
          <div>+48 781 444 202</div>
          <div><a href="https://github.com/darkestmedium">github.com/darkestmedium</a></div>
          <div><a href="https://darkestmedium.github.io/darkestmedium/">darkestmedium.github.io</a></div>
        </div>
        <p>Experienced Technical Animation Director with a proven track record in Commercials, Films, and Games.
          Skilled in Maya, Python, and C++. Responsible for pipeline optimization, improvement of in-house tools, and workflow automation.
          I am resourceful, highly motivated, and in constant search of new challenges to grow my skills.
          I've spent my entire career jumping into projects in the 11th hour to fight fires and solve impossible problems.
          Now super excited about web development!
        </p>
      </div>
      <ul>
        <div className="sec-experience">
          <h5>EXPERIENCE</h5>
            {workEntries.map(entry => (
              <EntryWork
                img = {entry.img}
                alt = {entry.alt}
                title = {entry.position}
                subTitle = {entry.company}
                subLabel1 = {entry.time}
                subLabel2 = {entry.location}
                description = {entry.description}
                key = {entry.id}
              />
            ))}
        </div>
        <div className="sec-education">
          <h5>EDUCATION</h5>
          {educationEntires.map(entry => (
            <Entry
              img = {entry.img}
              alt = {entry.alt}
              title = {entry.university}
              subTitle = {entry.degree}
              subLabel2 = {entry.time}
              description = {entry.description}
              key = {entry.id}
            />
          ))}
        </div>
        <div className="sec-lic-cert">
          <h5>LICENSES & CERTIFICATIONS</h5>
          {licCertEntries.map(entry => (
            <EntryLink
              img = {entry.img}
              alt = {entry.alt}
              title = {entry.name}
              subTitle = {entry.company}
              subLabel2 = {entry.time}
              url = {entry.url}
              credentials = {entry.credentials}
              key = {entry.id}
            />
          ))}
        </div>
        <div className="sec-skills">
          <h5>SKILLS</h5>
          <div class="sec-skills-grid">
            {skillEntries.map(entry => (
              <EntrySkill
                img = {entry.img}
                alt = {entry.alt}
                skill = {entry.skill}
                key = {entry.id}
              />
            ))}
          </div>
        </div>
      </ul>
    </div>
  );
}

export default Resume;