// components/pages/ItemPage/UserInfoBox/UserInfoBox.jsx
import React from 'react';
import './UserInfoBox.css';

export default function UserInfoBox({ user }) {
  return (
<div className="user-info-box">
  <img className="user-profilePic" src={user.profilePic} alt="Profile" />

  <div className="user-info-text">
    <div className="user-name">{user.name}</div>
    <div className="user-location">{user.location}</div>
    <div className="user-swaps">
      Made <span className="swaps-count">{user.swaps}</span> Swaps
    </div>
  </div>
</div>
  );
}
