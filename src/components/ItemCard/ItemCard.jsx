import React from 'react';
import './ItemCard.css';

const ItemDetails = ({ name, category, listedSince=false, fitsMark=false}) => {
  return (
    <div className="item-details">
      <h2 className="item-name">{name}</h2>
      <p className="item-category">{category}</p>
      {listedSince && (
      <p className="listed-since">{listedSince}</p>
      )}
      {fitsMark && (
      <p className="fits-mark">{fitsMark}</p>
      )}
    </div>
  );
};

export const ItemCard = ({ imageUrl, name, category, listedSince=false, fitsMark=false}) => {
  return (
    <div className="item-card">
      <div className="item-image">
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="item-img" />
        ) : (
          <div className="image-placeholder">Image Placeholder</div>
        )}
      </div>
      <ItemDetails name={name} category={category} listedSince={listedSince} fitsMark={fitsMark}/>
    </div>
  );
};
