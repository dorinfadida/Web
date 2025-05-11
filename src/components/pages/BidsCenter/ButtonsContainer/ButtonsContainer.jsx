import React, { useState } from 'react';
import BidsButton from './Button/Button';

export const ButtonsContainer = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState('myBids');

  const handleClick = (tab) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <div className="bids-button-container">
      <BidsButton
        text="My Bids"
        clicked={activeTab === 'myBids'}
        onClick={() => handleClick('myBids')}
      />
      <BidsButton
        text="Received Bids"
        clicked={activeTab === 'bidsIGot'}
        onClick={() => handleClick('bidsIGot')}
      />
    </div>
  );
};

export default ButtonsContainer;
