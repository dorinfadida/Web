import React, { useState } from 'react';
import { ButtonsContainer } from './ButtonsContainer/ButtonsContainer';
import { ItemContainer } from './ItemsContainer/ItemContainer';
import './BidsCenter.css';

export const BidsCenter = () => {
  const [activeTab, setActiveTab] = useState('myBids');

  return (
    <div>
      <h2 className="bids_headline">Your Bid Center</h2>
      <h3 className="bids_headline">Scroll and check the status on your past bids!</h3>
      <ButtonsContainer onTabChange={setActiveTab} />
      <ItemContainer />
    </div>
  );
};

export default BidsCenter;
