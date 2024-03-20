import React from 'react';
// import { Link } from 'react-router-dom';
import './Resume.scss';

// Components
import EntrySkill from './EntrySkill';
import EntryLink from './EntryLink';
import EntryWork from './EntryWork';

// Images
import imgAsp from '../../../assets/images/studio/asp.png'
import imgOcv from '../../../assets/images/studio/ocv.png'

import {workEntries, licCertEntries, skillEntries} from "../../../data/ResumeEntries"




function Resume() {


  return (
    <div className='sec-resume'>
      <div className="sec-info">
        <h1>Lukasz Biernat</h1>
        <div className="sec-info-grid">
          <div>darkestmedium@pm.me</div>
          <div>+48 781 444 202</div>
          <div><a href="https://github.com/darkestmedium">github.com/darkestmedium</a></div>
          <div><a href="https://darkestmedium.github.io/darkestmedium/">darkestmedium.github.io</a></div>
        </div>
        <p>As an Accomplished Technical Animation Director, I have a solid history of success in leading
          projects across Commercials, Films, and Games. Proficient in Maya, Python, and C++, 
          I've spearheaded pipeline optimization, enhanced in-house tools, and streamlined workflow processes. 
          Throughout my career, I've thrived on tackling challenges head-on, often joining projects 
          at critical junctures to troubleshoot and conquer seemingly insurmountable obstacles. 
          However, fueled by an unyielding passion for growth and innovation, I am now transitioning 
          my expertise towards becoming a top-tier web developer. Currently immersed in mastering 
          full stack development and blockchain technologies (including JavaScript, React, ICP, among others), 
          I am driven to excel in this dynamic field and am eagerly embracing the exciting opportunities it presents.
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
          <li>
            <div><img src={imgAsp} alt="Jan Matejko Academy of Fine Arts in Krakow."></img></div>
            <div>
              <h4>Jan Matejko Academy of Fine Arts in Krakow</h4>
              <p className="subTitle">Master's Degree, Animated Film</p>
              <p className="subLabel2">Oct 2009 - Oct 2014 · 5 years</p>
              <p>Graduation project <a href="https://youtu.be/MUHwqzW41yo?si=IedlzpxlIBRMlkEr">Where'd the Ghosts Go?</a></p>
            </div>
          </li>
          <li>
            <div><img src={imgOcv} alt="OpenCV University"></img></div>
            <div>
              <h4>OpenCV University</h4>
              <p className="subTitle">88%, Computer Software Engineering</p>
              <p className="subLabel2">Nov 2023 - Nov 2024 · 1 year</p>
              <p>Program description <a href="https://opencv.org/university/cvdl-master/">CVDL Master Program</a></p>
              <p>Mastering OpenCV with Python · 94% · 141a33e410984004b0e1e97069f4861f</p>
              <p>Fundamentals of Computer Vision & Image Processing in Python · 99% · a59e0c3ff7e94f9bb11915c0ad6c0b34</p>
              <p>Fundamentals of Computer Vision & Image Processing in C++ · 95% · d3b5932cd8184dd6bba6f3dd4fa28eec</p>
              <p>Deep Learning with PyTorch · 78% · 8a749e6e258d4f478337b2f0e2574c18</p>
              <p>Deep Learning with TensorFlow & Keras · 82% · 4897cd4d4cfc402fbb2830741e9c23bb</p>
              <p>Computer Vision & Deep Learning Applications · 79% · 5fd49f0421624946b320b1e80f2c319e</p>
              <p>AI Art Generation for Everyone · 89% · 66111c8869584727b1107d65ee06ee70</p>
              <p>Advanced AI Art Generation · 95% · cb4ccabab54b4939a4e071fc725d08ad</p>
            </div>
          </li>
          {/* {educationEntires.map(entry => (
            <Entry
              img = {entry.img}
              alt = {entry.alt}
              title = {entry.university}
              subTitle = {entry.degree}
              subLabel2 = {entry.time}
              description = {entry.description}
              key = {entry.id}
            />
          ))} */}
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
          <div className="sec-skills-grid">
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