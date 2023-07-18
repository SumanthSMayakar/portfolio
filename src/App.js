import React from 'react';
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Work from './components/works/Work';
import Contact from './components/contact/Contact'
import Testimonials from './components/testimonials/Testimonials'
import "./app.scss"

function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Contact/>
        <Work/>
        <Testimonials/>
    </div>
    </div>
    
  );
}

export default App;
