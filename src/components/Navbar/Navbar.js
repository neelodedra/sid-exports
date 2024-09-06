import React, { useState } from 'react';
import themes from '../../utils/themes';
import './Navbar.css';

const Navbar = ({ currentTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Log the logo src to verify
  const logoSrc = themes[currentTheme].logo;
  console.log('Logo src:', logoSrc);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logoSrc} alt="Logo" className="logo-image" />
        SID DRY FISH EXPORTS
      </div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/about-us">About Us</a></li>
          <li><a href="/our-products">Our Products</a></li>
          <li><a href="/production">Production</a></li>
          <li><a href="/downloads">Downloads</a></li>
          <li><a href="/blogs">Blogs</a></li>
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
