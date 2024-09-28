import React from 'react';
import './Home.css';
// import Navbar from '../../components/Navbar/Navbar';
import Container from '../../components/Container/Container';
// import Footer from '../../components/Footer/Footer';
import Experience from '../../components/Experience/Experience';
import { BodyContent, BodyContentReversed } from '../../components/BodyContent/BodyContent';
import ProductsContainer from '../../components/ProductsContainer/ProductsContainer';
import ThemeSwitcher from '../../components/ThemeSwitcher/ThemeSwitcher';

const Home = ({ currentTheme, onThemeChange }) => {
  return (
    <div className="home">
      {/* Pass the currentTheme to Navbar */}
      {/* <Navbar currentTheme={currentTheme} /> */}
      <Container />
      <BodyContent />
      <BodyContentReversed />
      <ProductsContainer />
      <Experience />
      {/* <Footer /> */}
      <ThemeSwitcher onThemeChange={onThemeChange} />
    </div>
  );
};

export default Home;
