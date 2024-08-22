import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>SID DRY FISH EXPORTS</h2>
          <p>Leading in international fish trade with over two decades of dedicated service ensuring top-notch quality.</p>
          <div className="social-media">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/our-products">Our Products</a></li>
            <li><a href="/production">Production</a></li>
            <li><a href="/downloads">Downloads</a></li>
            <li><a href="/blogs">Blogs</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>We are happy to help!</h2>
          <p>Contact Us: info@siddryfishexports.com</p>
          <p>Phone: +91 90909 90909</p>
          <p>Address: Manek Chowk, Porbandar-360575</p>
          <div className="map">
            {/* Embed a map here */}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} SID DRY FISH EXPORTS | All Rights Reserved | <a href="/terms">Terms & Conditions</a> | <a href="/privacy">Privacy Policy</a>
      </div>
    </footer>
  );
}

export default Footer;
