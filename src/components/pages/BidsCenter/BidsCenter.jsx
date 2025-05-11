import React, { useState } from 'react';
import { ButtonsContainer } from './ButtonsContainer/ButtonsContainer';
import { ItemContainer } from './ItemsContainer/ItemContainer';
import './BidsCenter.css';

export const BidsCenter = () => {
  const [activeTab, setActiveTab] = useState('myBids');

  return (
    <div className="bids-center">
      <ButtonsContainer onTabChange={setActiveTab} />
      <ItemContainer />
    </div>
  );
};

export default BidsCenter;
