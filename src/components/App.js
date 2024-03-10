import React, { useState } from 'react';

// Components
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import Resume from "./Resume"




function App() {

  const [showMain, setShowMain] = useState(true);

  const toggleDisplay = () => {
    setShowMain(!showMain);
  };

  return (
    <div className='root'>
      <Header />
      {showMain ? <Main toggleDisplay={toggleDisplay} /> : <Resume toggleDisplay={toggleDisplay} />}
      <Footer />
    </div>
  );
}

export default App;
