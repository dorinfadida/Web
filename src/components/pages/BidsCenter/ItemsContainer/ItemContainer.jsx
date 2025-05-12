import React from 'react';
import './ItemsContainer.css';

export const ItemContainer = () => {
  return (
    <div className="bids-wrapper">
      <div className="bids-headers">
        <h3>Give</h3>
        <h3>Take</h3>
      </div>
      <div className="bid-box" />
      <div className="bid-box" />
      <div className="bid-box" />
      <div className="bid-box" />
    </div>
  );
};

export default ItemContainer;
