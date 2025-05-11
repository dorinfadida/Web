import React from 'react';
import { ItemCard } from '../../../ItemCard/ItemCard';
import './MainContainer.css';
import { itemsData } from '../../../ItemCard/ItemsData.js';

export const MainContainer = () => {
  return (
    <div className="items-container">
      {itemsData.map((item, index) => (
        <ItemCard
          key={index}
          imageUrl={item.imageUrl}
          name={item.name}
          category={item.category}
          listedSince={item.listedSince}
          fitsMark={item.fitsMark}
        />
      ))}
    </div>
  );
};
