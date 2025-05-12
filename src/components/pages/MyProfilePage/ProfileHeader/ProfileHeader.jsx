// src/pages/MyProfilePage/ProfileHeader/ProfileHeader.jsx

import React from 'react';
import UserInfoBox from '../../ItemPage/UserInfoBox/UserInfoBox';
import LookingForTags from '../../ItemPage/LookingForTags/LookingForTags';
import './ProfileHeader.css';

const ProfileHeader = ({ name, location, swaps, profilePic, lookingFor }) => {
  return (
    <div className="profile-header">
    <button className="edit-button">
        <img src="/icons/edit_profile.svg" alt="Edit profile" />
    </button>

    <div className="left-section">
        <div className="user-info-wrapper">
        <UserInfoBox user={{ name, location, swaps, profilePic }} />
        </div>
    </div>

    <div className="right-section">
        <LookingForTags tags={lookingFor} />
    </div>
    </div>

  );
};

export default ProfileHeader;
