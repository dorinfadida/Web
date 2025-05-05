// components/pages/ItemPage/UserInfoBox/UserInfoBox.jsx
import React from 'react';
import './UserInfoBox.css';

export default function UserInfoBox({ user }) {
  return (
<div className="user-info-box">
  <img className="user-avatar" src={user.avatarUrl} alt="User avatar" />

  <div className="user-info-text">
    <div className="user-name">{user.name}</div>
    <div className="user-location">{user.location}</div>
    <div className="user-swaps">
      Made <span className="swaps-count">{user.swaps}</span> Swaps
    </div>
  </div>

  <div className="user-actions">
    <button className="circle-button" title="View Profile">
        <img src="/icons/list.svg" alt="User Items" />
      </button>
      <button className="circle-button" title="Contact on WhatsApp">
        <img src="/icons/whatsapp.svg" alt="WhatsApp" />
      </button>
  </div>
</div>
  );
}
