import React from 'react';
import './ItemCard.css';


const ItemDetails = ({ name, category, listedSince=false}) => {
  return (
    <div id="item-details">
      <h2 id="item-name">{name}</h2>
      <p id="item-category">{category}</p>
      {listedSince && (
      <p id="listed-since">{listedSince}</p>
      )}
    </div>
  );
};

export const ItemCard = ({ imageUrl, name, category, listedSince=false, profileImage, distance, onClick}) => {
  return (
    <div id="item-card" onClick={onClick}>

      <div className='upper-info'>
          {profileImage ? (
          <img src={profileImage} alt={name} className="profile-image" />
        ) : (
          <div id="image-placeholder">Image Placeholder</div>
        )}
          <p className="distance-info">{distance}</p>
      </div>

      <div id="item-image">
        {imageUrl ? (
          <img src={imageUrl} alt={name} id="item-img" />
        ) : (
          <div id="image-placeholder">Image Placeholder</div>
        )}
      </div>

      <ItemDetails name={name} category={category} listedSince={listedSince}/>
    </div>
  );
};
