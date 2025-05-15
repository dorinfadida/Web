import React from 'react';
import './ProfileHeader.css';

const ProfileHeader = ({ user }) => {
  const {
    name,
    location,
    swaps,
    profilePic,
    phone,
    email,
    tags,
  } = user;

  return (
    <div className="profile-header">
      <button className="edit-button">
        <img src="/icons/edit_profile.svg" alt="Edit profile" />
      </button>

      <div className="profile-row">
        {/* Left section: user info */}
        <div className="left-section">
          <div className="user-info-box">
            <img
              src={profilePic}
              alt={name}
              className="user-profilePic"
            />
            <div>
              <div className="user-name">{name}</div>
              <div className="user-location">{location}</div>
              <div className="user-swaps">Made <strong>{swaps}</strong> Swaps</div>
            </div>
          </div>
        </div>

        {/* Middle section: contact info */}
        <div className="middle-section">
          <div className="contact-info-box">
            <p className="contact-label">📞 {phone}</p>
            <p className="contact-label">📧 {email}</p>
          </div>
        </div>

        {/* Right section: tags */}
        <div className="right-section">
          <div className="looking-for">
            <div className="looking-for-title">Looking for:</div>
            <div className="tag-list">
              {tags.map((tag, index) => (
                <div className="tag" key={index}>{tag}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;