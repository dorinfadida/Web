// src/pages/MakeABidPage/MakeBidButton/MakeBidButton.jsx
import React from 'react';
import './MakeBidButton.css';

const MakeBidButton = ({ selectedItems, itemToTake }) => {
  const handleBid = () => {
    if (selectedItems.length === 0) return;
    const itemNames = selectedItems.map(item => `'${item.name}'`).join(', ');
    alert(`Bid sent! You offered ${itemNames} for '${itemToTake.name}'`);
  };

  return (
    <button
      className="make-bid-button"
      onClick={handleBid}
      disabled={selectedItems.length === 0}
    >
      Make a Bid
    </button>
  );
};

export default MakeBidButton;