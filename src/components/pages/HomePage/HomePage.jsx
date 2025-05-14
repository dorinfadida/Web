import React from 'react';
import { MainContainer } from './MainContainer/MainContainer';
import './HomePage.css';



export const HomePage = () => {
  return (
    <>
      <div className="entry-banner">
        <img src="/EntryBanner.png" alt="giveNtake banner" className="entry-image" />
      </div>

      <div className="homepage-container">
        <MainContainer/>
        <h3 id="items-bottomline">Register Now To Start Trading!</h3>
      </div>
    </>
  );
};

export default HomePage;
