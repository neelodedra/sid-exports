import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import OurProducts from './pages/OurProducts/OurProducts';
import Downloads from './pages/Downloads/Downloads';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  const [currentTheme, setCurrentTheme] = useState('coastal'); // Managing theme in App

  const handleThemeChange = (theme) => {
    setCurrentTheme(theme);
  };

  return (
    <Router>
      <div className="App">
        {/* Place ThemeSwitcher outside of Routes if it's needed globally */}
        {/* <ThemeSwitcher onThemeChange={handleThemeChange} /> */}
        <Navbar currentTheme={currentTheme} />
        
        {/* Routes for different components */}
        <Routes>
          {/* Path for Home page */}
          <Route path="/" element={<Home currentTheme={currentTheme} onThemeChange={handleThemeChange} />} />
          
          {/* Path for About Us */}
          <Route path="/about-us" element={<AboutUs />} />
          
          {/* Path for Our Products */}
          <Route path="/our-products" element={<OurProducts />} />
          
          
          {/* Path for Downloads */}
          <Route path="/downloads" element={<Downloads />} />
          
          {/* Redirect all other paths to Home */}
          <Route path="*" element={<Home currentTheme={currentTheme} onThemeChange={handleThemeChange} />} />
        </Routes>
        
        {/* Footer should be shown on all pages */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
