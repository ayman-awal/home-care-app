import React from 'react';

const HamburgerButton = ({ isOpen, onClick }) => (
  <button className={`hamburger-button ${isOpen ? 'open' : ''}`} onClick={onClick}>
    <div className="hamburger-icon">
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  </button>
);

export default HamburgerButton;