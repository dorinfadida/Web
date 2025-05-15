// components/pages/ItemPage/UserInfoBox/UserInfoBox.jsx
import React from 'react';
import './UserInfoBox.css';

export default function UserInfoBox({ user }) {
  return (
<div className="user-info-box-itempage">
  <img className="user-profilePic-itempage" src={user.profilePic} alt="Profile" />

  <div className="user-info-text-itempage">
    <div className="user-name-itempage">{user.name}</div>
    <div className="user-location-itempage">{user.location}</div>
    <div className="user-swaps-itempage">
      Made <span className="swaps-count-itempage">{user.swaps}</span> Swaps
    </div>
  </div>
</div>
  );
}
