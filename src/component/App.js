import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

// Components
import Nav from './Navbar';
import Footer from "./Footer"
// Pages
import Home from './page/Home'
import About from './page/About';
import Contact from './page/Contact';
import Resume from './page/Resume'




function App() {

  return (
    <div className='root'>
      <HashRouter>
        <Nav />
        <div className='content'>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
          <Footer />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;