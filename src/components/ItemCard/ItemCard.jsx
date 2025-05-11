import React from 'react';
import './ItemCard.css';

const ItemDetails = ({ name, category, listedSince=false, fitsMark=false}) => {
  return (
    <div id="item-details">
      <h2 id="item-name">{name}</h2>
      <p id="item-category">{category}</p>
      {listedSince && (
      <p id="listed-since">{listedSince}</p>
      )}
      {fitsMark && (
      <p id="fits-mark">{fitsMark}</p>
      )}
    </div>
  );
};

export const ItemCard = ({ imageUrl, name, category, listedSince=false, fitsMark=false}) => {
  return (
    <div id="item-card">
      <div id="item-image">
        {imageUrl ? (
          <img src={imageUrl} alt={name} id="item-img" />
        ) : (
          <div id="image-placeholder">Image Placeholder</div>
        )}
      </div>
      <ItemDetails name={name} category={category} listedSince={listedSince} fitsMark={fitsMark}/>
    </div>
  );
};
