import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import themes from '../../utils/themes';
import './Navbar.css';

const Navbar = ({ currentTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Provide a fallback theme in case currentTheme is undefined or invalid
  const theme = themes[currentTheme] || themes['coastal']; // Default to 'coastal' theme
  const logoSrc = theme.logo;

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logoSrc} alt="Logo" className="logo-image" />
        SID DRY FISH EXPORTS
      </div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/our-products">Our Products</Link></li>
          <li><Link to="/production">Production</Link></li>
          <li><Link to="/downloads">Downloads</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
        </ul>
      </div>
      <button className="contact-button">
        Contact Us
      </button>
      <div className="menu-icon" onClick={toggleMenu}>
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
    </nav>
  );
}

export default Navbar;
