import React from 'react';
import './Button.css';

export const BidsButton = ({ text, clicked, onClick }) => {
  return (
    <button
      className={clicked ? 'bids-button active' : 'bids-button'}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default BidsButton;
