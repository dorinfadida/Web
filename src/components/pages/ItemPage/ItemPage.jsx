import React from 'react';
import ItemDetails from './ItemDetails/ItemDetails';
import ItemGallery from './ItemGallery/ItemGallery';
import UserInfoBox from './UserInfoBox/UserInfoBox';
import LookingForTags from './LookingForTags/LookingForTags';
import OfferSwapButton from './OfferSwapButton/OfferSwapButton';
import { mockItem } from './MockItem';
import './ItemPage.css';

export default function ItemPage() {
  return (
    <div className="item-page-wrapper">
      <div className="item-layout">

        <div className="left-column">
          <ItemDetails 
            category={mockItem.category}
            name={mockItem.name}
            description={mockItem.description}
          />
          <UserInfoBox user={mockItem.user} />
          <LookingForTags tags={mockItem.user.lookingFor} />
        </div>

        <div className="right-column">
          <ItemGallery images={mockItem.images} />
          <OfferSwapButton onClick={() => console.log("Swap offered!")} />
        </div>

      </div>
    </div>
  );
}
