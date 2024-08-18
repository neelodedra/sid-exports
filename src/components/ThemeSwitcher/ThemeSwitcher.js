import React, { useState } from 'react';
import themes from '../../utils/themes';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('coastal');

  const applyTheme = (themeName) => {
    const theme = themes[themeName];
    for (let key in theme) {
      document.documentElement.style.setProperty(key, theme[key]);
    }
  };

  const handleThemeChange = (event) => {
    const selectedTheme = event.target.value;
    setTheme(selectedTheme);
    applyTheme(selectedTheme);
  };

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
