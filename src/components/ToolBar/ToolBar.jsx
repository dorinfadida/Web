import React from "react";
import "./ToolBar.css";
import { FaBars } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";
import { MdPerson } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const ToolBar = ({ toggleMenu }) => {
  const navigate = useNavigate();
  const handleNavigate = (path) => { navigate(path);};

  return (
    <header className="toolbar">
      <div className="logo-container">
        <img src="/favicon.ico" alt="Logo" className="logo" />
        <span className="brand-text">Give&Take</span>
      </div>


      <div className="icons-container">
        <MdNotifications className="toolbar-icon large-icon" />
        <MdPerson className="toolbar-icon large-icon bold-icon" onClick={() => handleNavigate('/profile')} />

        <div className="toolbar-icon" onClick={toggleMenu}>
          <FaBars />
        </div>
        
      </div>
    </header>
  );
};

export default ToolBar;