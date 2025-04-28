import React from 'react';
import { MainContainer } from './MainContainer/MainContainer';

export const HomePage = ({ imageUrl, name, category }) => {
  return (
    <MainContainer imageUrl={imageUrl} name={name} category={category} />
  );
};
