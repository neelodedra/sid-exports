import React from 'react';
import './BodyContent.css';
import fish from '../../assets/images/orang_fish.jpg';

const BodyContent = () => {
  return (
    <div className="body-content">
      <div className="text-section">
        <h1>Superior Calibre</h1>
        <p>Our value is quality. Every product is guaranteed to satisfy the highest industry standards thanks to our meticulous sourcing & processing procedures.</p>
        <p>We are aware that the calibre of services you offer to your clients determines how successful your business will be.</p>
        <p>You can be sure that your supply chain is strengthened with the best when you work with SID DRY FISH EXPORTS.</p>
      </div>
      <div className="image-section">
        <img src={fish} alt="Quality Inspection" />
      </div>
    </div>
  );
}

export default BodyContent;
