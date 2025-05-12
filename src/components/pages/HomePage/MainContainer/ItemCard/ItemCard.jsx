import React from 'react';
import './ItemCard.css';

const ItemDetails = ({ name, category }) => {
  return (
    <div className="item-details">
      <h2 className="item-name">{name}</h2>
      <p className="item-category">{category}</p>
    </div>
  );
};

export const ItemCard = ({ imageUrl, name, category, age, onClick }) => {
  return (
    <div className="item-card" onClick={onClick}>
      <div className="item-image">
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="item-img" />
        ) : (
          <div className="image-placeholder">Image Placeholder</div>
        )}
      </div>
      <ItemDetails name={name} category={category} />
    </div>
  );
};
