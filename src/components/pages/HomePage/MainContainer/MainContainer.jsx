import React, { useState } from 'react';
import { ItemCard } from '../../../ItemCard/ItemCard';
import ItemPage from '../../ItemPage/ItemPage';
import { mockItem } from '../../ItemPage/MockItem';
import { itemsData } from '../../../ItemCard/ItemsData';
import './MainContainer.css';

export const MainContainer = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="items-container">
      {itemsData.map((item, index) => (
        <div key={index} onClick={() => setSelectedItem(mockItem)}>
          <ItemCard
            imageUrl={item.imageUrl}
            name={item.name}
            category={item.category}
            listedSince={item.listedSince}
            profileImage={item.profileImage}
            distance={item.distance}
            userName={item.userName}
          />
        </div>
      ))}

      {selectedItem && (
        <ItemPage item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
    </div>
  );
};
