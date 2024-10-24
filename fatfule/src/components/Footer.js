import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => { 
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 FitnessBrand. All rights reserved.</p>
        <ul className="footer-links">
          <li><Link to={'https://www.instagram.com/mohitkhyalia_mk/'}>Instagram</Link ></li>
          <li><Link to={'https://www.youtube.com/@mohitkhyalia_mk'}>YouTube</Link ></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
