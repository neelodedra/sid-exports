import React, { useRef, useState, useEffect } from 'react';
import './ProductsContainer.css';
import product1 from '../../assets/images/product_prawns.jpg'; // Replace with actual image paths
import product2 from '../../assets/images/product_fish.jpg';
import product3 from '../../assets/images/product_lobster.jpg';
import product4 from '../../assets/images/product_crab.jpg';
import product5 from '../../assets/images/product_silver_fish.jpg';
import product6 from '../../assets/images/product_dry_fishes.jpg';

const products = [
  { id: 1, image: product1, name: 'Dry Salted Prawns' },
  { id: 2, image: product2, name: 'Golden Anchovy' },
  { id: 3, image: product3, name: 'Small Lobsters' },
  { id: 4, image: product4, name: 'Anchovy Dry Fish' },
  { id: 5, image: product5, name: 'Silver Dry Fish' },
  { id: 6, image: product6, name: 'Paplet Dry Fish' },
  // Add more products as needed
];

const ProductsContainer = () => {
  const scrollRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      const scrollAmount = clientWidth / 2;

      if (direction === 'left') {
        scrollRef.current.scrollTo({
          left: scrollLeft - scrollAmount,
          behavior: 'smooth',
        });
      } else {
        scrollRef.current.scrollTo({
          left: scrollLeft + scrollAmount,
          behavior: 'smooth',
        });
      }
    }
  };

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    checkScrollPosition();
    if (scrollRef.current) {
      scrollRef.current.addEventListener('scroll', checkScrollPosition);
    }
    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener('scroll', checkScrollPosition);
      }
    };
  }, []);

  return (
    <div className="products-container">
      <h2>Our Products</h2>
      <div className="products-wrapper">
        {showLeftButton && (
          <button className="scroll-button left" onClick={() => handleScroll('left')}>
            &lt;
          </button>
        )}
        <div className="products-scroll" ref={scrollRef}>
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
            </div>
          ))}
        </div>
        {showRightButton && (
          <button className="scroll-button right" onClick={() => handleScroll('right')}>
            &gt;
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductsContainer;
