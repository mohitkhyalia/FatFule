import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => { 
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to={'/'}>MK</Link >
      </div>
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><Link to={'/'}>Home</Link ></li>
        <li><Link to={'/w'}>Guids</Link ></li>
        <li><Link to={'/w'}>programs</Link ></li>
        <li><Link to={'https://mohitkhyalia.github.io/portfolio/'}>About</Link ></li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default NavBar;
