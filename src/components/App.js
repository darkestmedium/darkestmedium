// import React, { useState } from 'react';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Nav from './Navbar';
import Main from "./Main"
import Resume from "./Resume"
import Footer from "./Footer"


function App() {

  return (
    <div className='root'>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;