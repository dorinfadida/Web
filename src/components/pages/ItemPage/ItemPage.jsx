import React from 'react';
import ItemDetails from './ItemDetails/ItemDetails';
import ItemGallery from './ItemGallery/ItemGallery';
import UserInfoBox from './UserInfoBox/UserInfoBox';
import LookingForTags from './LookingForTags/LookingForTags';
import OfferSwapButton from './OfferSwapButton/OfferSwapButton';
import './ItemPage.css';

export default function ItemPage({ item }) {
  return (
    <div className="item-page-wrapper">
      <div className="item-layout">

        <div className="left-column">
          <ItemDetails 
            category={item.category}
            name={item.name}
            description={item.description}
          />
          <UserInfoBox user={item.user} />
          <LookingForTags tags={item.user.lookingFor} />
        </div>

        <div className="right-column">
          <ItemGallery images={item.images} />
          <OfferSwapButton onClick={() => console.log("Swap offered!")} />
        </div>

      </div>
    </div>
  );
}
