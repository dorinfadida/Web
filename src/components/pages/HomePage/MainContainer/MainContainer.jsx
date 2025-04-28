import React from 'react';
import { ItemCard } from './ItemCard/ItemCard';

export const MainContainer = ({ imageUrl, name, category }) => {
  return (
    <ItemCard imageUrl={imageUrl} name={name} category={category} />
  );
};
