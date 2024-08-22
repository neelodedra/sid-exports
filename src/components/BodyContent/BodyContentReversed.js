import React from 'react';
import './BodyContentReversed.css';
import lobster from '../../assets/images/lobster.jpg'; // Adjust the path as needed

const BodyContentReversed = () => {
  return (
    <div className="body-content-reversed">
      <div className="image-section">
        <img src={lobster} alt="Quality Inspection" />
      </div>
      <div className="text-section">
        <h1>Superior Calibre</h1>
        <p>Our value is quality. Every product is guaranteed to satisfy the highest industry standards thanks to our meticulous sourcing & processing procedures.</p>
        <p>We are aware that the calibre of services you offer to your clients determines how successful your business will be.</p>
        <p>You can be sure that your supply chain is strengthened with the best when you work with SID DRY FISH EXPORTS.</p>
      </div>
    </div>
  );
}

export default BodyContentReversed;
