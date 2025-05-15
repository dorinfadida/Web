// src/pages/MakeABidPage/MakeABidPage.jsx
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MakeABidPage.css';
import { myItems } from './mockData';
import ItemToTakeCard from './ItemToTakeCard/ItemToTakeCard';
import MyItemsList from './MyItemsList/MyItemsList';
import SelectionBox from './SelectionBox/SelectionBox';
import MakeBidButton from './MakeBidButton/MakeBidButton';

const MakeABidPage = () => {
  const { state } = useLocation();
  const itemToTake = state?.itemToTake;

  const [selectedItemIds, setSelectedItemIds] = useState([]);

  const handleSelectItem = (itemId) => {
    setSelectedItemIds((prev) =>
      prev.includes(itemId) ? prev.filter(id => id !== itemId) : [...prev, itemId]
    );
  };

  const selectedItems = myItems.filter(item => selectedItemIds.includes(item.id));

  if (!itemToTake) {
    return <div className="make-a-bid-page">Item not found.</div>;
  }

  return (
    <div className="make-a-bid-page">
      <div className="bid-content">
        <div className="left-column">
          <h3>Take</h3>
          <ItemToTakeCard item={itemToTake} />

          <h3>Give</h3>
          <SelectionBox selectedItems={selectedItems} />

          <MakeBidButton selectedItems={selectedItems} itemToTake={itemToTake} />
        </div>

        <div className="right-column">
          <h3>Your Items</h3>
          <MyItemsList
            items={myItems}
            selectedItemIds={selectedItemIds}
            onSelectItem={handleSelectItem}
          />
        </div>
      </div>
    </div>
  );
};

export default MakeABidPage;