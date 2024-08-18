import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        SID DRY FISH EXPORTS
      </div>
      <ul className="nav-links">
        <li><a href="/home">Home</a></li>
        <li><a href="/about-us">About Us</a></li>
        <li><a href="/our-products">Our Products</a></li>
        <li><a href="/production">Production</a></li>
        <li><a href="/downloads">Downloads</a></li>
        <li><a href="/blogs">Blogs</a></li>
      </ul>
      <button className="contact-button">
        Contact Us
      </button>
    </nav>
  );
}

export default Navbar;
