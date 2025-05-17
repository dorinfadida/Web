// ItemPage.jsx

import React from 'react';
import ItemDetails from './ItemDetails/ItemDetails';
import ItemGallery from './ItemGallery/ItemGallery';
import UserInfoBox from './UserInfoBox/UserInfoBox';
import LookingForTags from './LookingForTags/LookingForTags';
import OfferSwapButton from './OfferSwapButton/OfferSwapButton';
import './ItemPage.css';

export default function ItemPage({ item, onClose }) {
  return (
    <div className="item-modal-overlay" onClick={onClose}>
      <div className="item-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="item-modal-close" onClick={onClose}>×</button>

        <div className="item-page-wrapper">
          <div className="item-layout">
            <div className="left-column">
                <ItemDetails 
                  category={item.category}
                  name={item.name}
                  description={item.description}
                  story={item.story}
                />
                <div className="user-contact-row">
                  <UserInfoBox user={item.user} />
                  <OfferSwapButton item={item} />
                  </div>  
                  <LookingForTags tags={item.user.lookingFor} />
              </div>
            <div className="right-column">
              <ItemGallery images={item.images} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
