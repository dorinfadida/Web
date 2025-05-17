import React from "react";
import "./ToolBar.css";
import { FaBars } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import SearchBar from '../pages/HomePage/Search/Search';

const ToolBar = ({ toggleMenu, isSignedIn, onSignUpClick, onSignInClick }) => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <header className="toolbar">
      <div className="logo-container">
        <img src="/favicon.ico" alt="Logo" className="logo" />
        <span className="brand-text">Give&Take</span>
      </div>

      <div className="toolbar-search-center">
        <SearchBar />
      </div>

      {isSignedIn ? (
        <div className="icons-container">
          <img
            src="https://img.freepik.com/premium-photo/realistic-girl-ai-women_980716-3617.jpg?w=740"
            alt="Your Profile"
            className="profile-image-toolbar"
            onClick={() => handleNavigate("/profile")}
          />
          <MdNotifications className="toolbar-icon large-icon" />
          <div className="toolbar-icon" onClick={toggleMenu}>
            <FaBars />
          </div>
        </div>
      ) : (
        <div className="auth-buttons-container">
          <button className="auth-button" onClick={onSignInClick}>Sign In</button>
          <button className="auth-button" onClick={onSignUpClick}>Sign Up</button>
        </div>
      )}
    </header>
  );
};

export default ToolBar;