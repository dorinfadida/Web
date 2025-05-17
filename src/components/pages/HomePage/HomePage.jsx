import React from 'react';
import { MainContainer } from './MainContainer/MainContainer';
import './HomePage.css';

export const HomePage = () => {
  return (
    <div className='home-page'>
      <div className="entry-banner">
        <img src="/EntryBanner.png" alt="giveNtake banner" className="entry-image" />
      </div>

      <div className="homepage-container">
        <MainContainer />
        <h3 id="items-bottomline">Join Now And Start Swapping!</h3>
      </div>
    </div>
  );
};

export default HomePage;
