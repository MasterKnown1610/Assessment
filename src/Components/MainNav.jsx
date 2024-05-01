import React from 'react';
import './MainNav.css'; 
const MainNav = () => {
  return (
    <nav className="navbar">
      <div className="container">
        
        <div className="logo-container">
         
          <a href="/" className="navbar-logo">
            <img src="https://www.google.com/chrome/static/images/chrome-logo-m100.svg" alt="Logo" />
          </a>
         
          <span className="navbar-name">Chrome</span>
        </div>
        
        
        <ul className="navbar-links">
          <li><a href="/ai-innovations">AI Innovations</a></li>
          <li><a href="/features">Features</a></li>
          <li><a href="/safety">Safety</a></li>
          <li><a href="/by-google">By Google</a></li>
          <li><a href="/extensions">Extensions</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default MainNav;
