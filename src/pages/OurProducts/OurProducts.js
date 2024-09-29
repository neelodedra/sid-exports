import React, { useState } from 'react';
import './OurProducts.css';
import dryFish1 from '../../assets/images/product_lobster.jpg'; // Replace with actual image paths
import dryFish2 from '../../assets/images/product_crab.jpg';
import dryFish3 from '../../assets/images/salt_fish.jpg';
import freshFish1 from '../../assets/images/product_prawns.jpg';
import freshFish2 from '../../assets/images/product_crab.jpg';
import freshFish3 from '../../assets/images/orang_fish.jpg';
import freshFish4 from '../../assets/images/salt_fish.jpg';
import freshFish5 from '../../assets/images/blue_fish.jpg';

// Dry Fish and Fresh Fish products data
const dryFishProducts = [
  { id: 1, image: dryFish1, name: 'Bombil (Bombay Duck)' },
  { id: 2, image: dryFish2, name: 'Ribbon Dry Fish' },
  { id: 3, image: dryFish3, name: 'Jawla (Jauula)' },
];

const freshFishProducts = [
  { id: 1, image: freshFish1, name: 'Silver Pomfret' },
  { id: 2, image: freshFish2, name: 'Black Pomfret' },
  { id: 3, image: freshFish3, name: 'Ribbon Fish' },
  { id: 4, image: freshFish4, name: 'Squid' },
  { id: 5, image: freshFish5, name: 'Shrimps' },
];

const OurProducts = () => {
  const [activeSection, setActiveSection] = useState('dryFish'); // State to track which section is active

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const productsToDisplay = activeSection === 'dryFish' ? dryFishProducts : freshFishProducts;

  return (
    <div className="our-products-page">
      <h2>Our Products</h2>
      <div className="section-selector">
        <button
          className={`section-button ${activeSection === 'dryFish' ? 'active' : ''}`}
          onClick={() => handleSectionClick('dryFish')}
        >
          Dry Fish
        </button>
        <button
          className={`section-button ${activeSection === 'freshFish' ? 'active' : ''}`}
          onClick={() => handleSectionClick('freshFish')}
        >
          Fresh Fish
        </button>
      </div>

      <div className="products-grid">
        {productsToDisplay.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <p className="product-name">{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
