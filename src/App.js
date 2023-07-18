import React, { useState } from 'react';
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Work from './components/works/Work';
import Contact from './components/contact/Contact';
import Testimonials from './components/testimonials/Testimonials';
import "./app.scss"

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Work/>
        <Testimonials/>
        <Contact/>
    </div>
    </div>
    
  );
}

export default App;
