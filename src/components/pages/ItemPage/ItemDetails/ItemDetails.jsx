// components/pages/ItemPage/ItemDetails/ItemDetails.jsx
import React from 'react';
import './ItemDetails.css';

export default function ItemDetails({ category, name, description }) {
  return (
    <div className="item-details">
      <p className="item-category">{category}</p>
      <h2 className="item-name">{name}</h2>
      <div className="item-description-box">
        <p className="item-description">{description}</p>
      </div>
    </div>
  );
}
