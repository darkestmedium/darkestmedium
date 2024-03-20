import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

// Components
import Nav from './Navbar';
import Footer from "./Footer"
// Pages
import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/resume/Resume'
import Thought from './pages/thought/Thought';




function App() {

  return (
    <div className='root'>
      <HashRouter>
        <Nav />
        <div className='content'>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/thought" element={<Thought />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;