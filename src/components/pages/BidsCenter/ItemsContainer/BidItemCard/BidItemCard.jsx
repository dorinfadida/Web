import React from 'react';
import './BidItemCard.css';

export const BidItemCard = ({ item }) => {
  const { name, category, image } = item;

  return (
    <div className="bid-item-card">
      <div className="bid-item-image">
        {image ? (
          <img src={image} alt={name} className="bid-img" />
        ) : (
          <div className="bid-image-placeholder">No Image</div>
        )}
      </div>
      <div className="bid-item-details">
        <h4 className="bid-item-name">{name}</h4>
        <p className="bid-item-category">{category}</p>
      </div>
    </div>
  );
};

export default BidItemCard;
