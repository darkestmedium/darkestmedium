import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Nav from './Navbar';
import Main from "./Main"
import Resume from "./Resume"
import Footer from "./Footer"


function App() {

  return (
    <div className='root'>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;