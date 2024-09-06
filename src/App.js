import React from 'react';
import Home from './pages/Home/Home';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';
// import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  return (
    <div className="App">
      <Home />
      {/* <ThemeSwitcher /> */}
    </div>
  );
};

export default App;
