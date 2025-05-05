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

<<<<<<< HEAD:src/components/pages/HomePage/MainContainer/ItemCard/ItemCard.jsx
export const ItemCard = ({ imageUrl, name, category,  description}) => {
=======
export const ItemCard = ({ imageUrl, name, category, listedSince=false, fitsMark=false}) => {
>>>>>>> b642fd3a51801a2213e765ab06857a895c2e5103:src/components/ItemCard/ItemCard.jsx
  return (
    <div className="item-card">
      <div className="item-image">
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="item-img" />
        ) : (
          <div className="image-placeholder">Image Placeholder</div>
        )}
      </div>
<<<<<<< HEAD:src/components/pages/HomePage/MainContainer/ItemCard/ItemCard.jsx
      <ItemDetails name={name} category={category} description={description} />
=======
      <ItemDetails name={name} category={category} listedSince={listedSince} fitsMark={fitsMark}/>
>>>>>>> b642fd3a51801a2213e765ab06857a895c2e5103:src/components/ItemCard/ItemCard.jsx
    </div>
  );
};
