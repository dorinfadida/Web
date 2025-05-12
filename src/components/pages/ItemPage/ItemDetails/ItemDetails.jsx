// components/pages/ItemPage/ItemDetails/ItemDetails.jsx
import React from 'react';
import './ItemDetails.css';
export default function ItemDetails({ category, name, description, isModalView }) {
  return (
    <div className={`item-details-itemPage ${isModalView ? 'modal' : ''}`}>
      <h2 className="item-name-itemPage">{name}</h2>
      <p className="item-category-itemPage">{category}</p>
      {description && (
        <div className="item-description-box-itemPage">
          <p className="item-description-itemPage">{description}</p>
        </div>
      )}
    </div>
  );
}

