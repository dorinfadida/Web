import React from 'react';
import { mockBids } from './MockBids';
import { BidItemCard } from './BidItemCard/BidItemCard';
import UserInfoBox from '../../ItemPage/UserInfoBox/UserInfoBox';
import BidStatusButton from '../BidStatusButton/BidStatusButton';
import './ItemsContainer.css';

const ItemContainer = ({ activeTab }) => {
  const giveLabel = activeTab === 'myBids' ? 'Give' : 'Take';
  const takeLabel = activeTab === 'myBids' ? 'Take' : 'Give';

  return (
    <div className="items-container-bid-center">

      {/* ✅ Column Headers */}
      <div className="bids-columns-header">
        <h3 className="give-column-header">{giveLabel}</h3>
        <h3 className="take-column-header">{takeLabel}</h3>
        <div className="profile-column-header" /> {/* spacer for profile */}
      </div>

      {mockBids.map((bid) => (
        <div key={bid.id} className="bid-row-bid-center">
          <div className="item-pair-bid-center">
            <div className="give-item-bid-center">
              <BidItemCard item={activeTab === 'myBids' ? bid.takeItem : bid.giveItem} />
            </div>

            <div className="take-item-bid-center">
              <BidItemCard item={activeTab === 'myBids' ? bid.giveItem : bid.takeItem} />
            </div>

            <div className="profile-bid-center">
              <UserInfoBox user={bid.user} />
              {activeTab === 'myBids' && (
                <div className="bid-status-buttons">
                  <BidStatusButton text="Change Bid" change icon />
                  <BidStatusButton text="Reject Bid" decline icon />
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemContainer;
