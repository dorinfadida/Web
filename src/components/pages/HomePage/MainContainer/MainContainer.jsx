import React from 'react';
import { ItemCard } from './ItemCard/ItemCard';
import './MainContainer.css';

export const MainContainer = ({ items }) => {
  return (
    <div className="items-container">
      {items.map((item, index) => (
        <ItemCard
          key={index}
          imageUrl={item.imageUrl}
          name={item.name}
          category={item.category}
        />
      ))}
    </div>
  );
};
