import React, { useState } from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import Container from '../../components/Container/Container';
import Footer from '../../components/Footer/Footer';
import Experience from '../../components/Experience/Experience';
import { BodyContent, BodyContentReversed } from '../../components/BodyContent/BodyContent';
import ProductsContainer from '../../components/ProductsContainer/ProductsContainer';
import ThemeSwitcher from '../../components/ThemeSwitcher/ThemeSwitcher';

const Home = () => {
  const [currentTheme, setCurrentTheme] = useState('coastal');

  const handleThemeChange = (theme) => {
    setCurrentTheme(theme);
  };

  return (
    <div className="home">
      <Navbar currentTheme={currentTheme} />
      <ThemeSwitcher onThemeChange={handleThemeChange} />
      <Container />
      <BodyContent />
      <BodyContentReversed />
      <ProductsContainer />
      <Experience />
      <Footer />
    </div>
  );
};

export default Home;
