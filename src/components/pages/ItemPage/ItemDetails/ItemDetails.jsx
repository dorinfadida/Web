import React, { useState } from 'react';
import './ItemDetails.css';

export default function ItemDetails({ category, name, description, story }) {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="item-details-itemPage">
      <h2 className="item-name-itemPage">{name}</h2>
      <p className="item-category-itemPage">{category}</p>

      <div className="tabs-wrapper">
        <button
          className={`tab-button ${activeTab === 'description' ? 'active' : ''}`}
          onClick={() => setActiveTab('description')}
        >
          Description
        </button>
        <button
          className={`tab-button ${activeTab === 'story' ? 'active' : ''}`}
          onClick={() => setActiveTab('story')}
        >
          Item's Story
        </button>
      </div>

      <div className="item-description-box-itemPage">
        <p className="item-description-itemPage">
          {activeTab === 'description' ? description : story || 'No story available.'}
        </p>
      </div>
    </div>
  );
}
