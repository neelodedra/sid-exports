import React, { useState, useEffect } from 'react';
import themes from '../../utils/themes';
import Navbar from '../Navbar/Navbar';

const ThemeSwitcher = ({ onThemeChange }) => {
  const [theme, setTheme] = useState('coastal');

  const applyTheme = (themeName) => {
    const theme = themes[themeName];
    for (let key in theme) {
      if (key.startsWith('--')) {
        document.documentElement.style.setProperty(key, theme[key]);
      }
    }
    // Update the logo
    const logoElement = document.querySelector('link[rel="icon"]');
    if (logoElement) {
      logoElement.href = theme.logo;
    }
  };

  const handleThemeChange = (event) => {
    const selectedTheme = event.target.value;
    setTheme(selectedTheme);
    applyTheme(selectedTheme);
    onThemeChange(selectedTheme);
  };

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <div>
      <select value={theme} onChange={handleThemeChange}>
        <option value="coastal">Coastal Theme</option>
        <option value="rusticFisherman">Rustic Fisherman Theme</option>
        <option value="modernMinimalist">Modern Minimalist Theme</option>
      </select>
    </div>
  );
};

export default ThemeSwitcher;
