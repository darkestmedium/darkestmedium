import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

// Components
import Nav from './Navbar';
import Footer from "./Footer"
import Home from "./page/Home"
import Resume from "./page/Resume"


function App() {

  return (
    <div className='root'>
      {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
      <HashRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;