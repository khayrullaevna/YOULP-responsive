import React, { useState } from 'react';
import Youlp from './pages/Youlp';
import Ourintern from './pages/Ourintern';
import News from './pages/News';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Youlp />
      <Ourintern />
      <News />
      <Footer />
    </div>
  );
}

export default App;
