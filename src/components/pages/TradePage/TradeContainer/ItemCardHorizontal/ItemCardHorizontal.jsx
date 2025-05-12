import React from 'react';
import './ItemCardHorizontal.css';


export default function ItemCardHorizontal({ category, name, imageUrl, description,size="small" }) {
  const sizeClass = size === 'large' ? 'item-card-large' : 'item-card-small';
  return (
     <div className={`item-card ${sizeClass} ${description ? 'with-description' : ''}`}>
      <div className="item-top">
        <div className="item-info">
          <div className="item-category">{category}</div>
          <div className="item-name">{name}</div>
        </div>
        <img className="item-image" src={imageUrl} alt={name} />
      </div>
      {description && (
        <div className="item-description">{description}</div>
      )}
    </div>
  );
}


