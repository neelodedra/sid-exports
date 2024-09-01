import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import Container from '../../components/Container/Container';
import Footer from '../../components/Footer/Footer';
import Experience from '../../components/Experience/Experience';
import { BodyContent, BodyContentReversed } from '../../components/BodyContent/BodyContent';
import ProductsContainer from '../../components/ProductsContainer/ProductsContainer';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Container />
      <BodyContent />
      <BodyContentReversed />
      <ProductsContainer />
      {/* <h2>Welcome to Sid Exports</h2>
      <p>This is website of Sid Dry Fish Exports.</p> */}
      <Experience />
      <Footer />
    </div>
  );
};

export default Home;
