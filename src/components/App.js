import React from 'react';

// Components
import Header from "./Header"
import Main from "./Main"
import About from "./About"
import Contact from './Contact';
import Footer from "./Footer"

import Resume from "./Resume"




function App() {
  return (
    <div className='root'>
      <Header />
      <Main />
      <About />
      <Contact />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
