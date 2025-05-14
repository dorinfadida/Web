import React from 'react';
import { mockBids } from './MockBids';
import { BidItemCard } from './BidItemCard/BidItemCard'
import UserInfoBox from '../../ItemPage/UserInfoBox/UserInfoBox'
import './ItemsContainer.css';


const ItemContainer = ({ activeTab }) => {
  return (
    <div className="items-container">
      <div className="header-row">
        <h3>{activeTab === 'myBids' ? 'Take' : 'Give'}</h3>
        <h3>{activeTab === 'myBids' ? 'Give' : 'Take'}</h3>
      </div>

    {mockBids.map((bid) => (
      <div key={bid.id} className="bid-row">
        <div className="item-pair">
          <div className="give-item">
          <BidItemCard item={activeTab === 'myBids' ? bid.takeItem : bid.giveItem} />
          </div>
          <div className='take-item'>
          <BidItemCard item={activeTab === 'myBids' ? bid.giveItem : bid.takeItem} />
          </div>
          <UserInfoBox user={bid.user} />
        </div>
      </div>
))}
    </div>
  );
};

export default ItemContainer;
