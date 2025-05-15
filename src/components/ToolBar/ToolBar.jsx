import React from "react";
import "./ToolBar.css";
import { FaSearch, FaRegCommentDots, FaBars } from "react-icons/fa";
import { MdPerson } from "react-icons/md";

const ToolBar = ({ toggleMenu }) => {

  return (
    <header className="toolbar">
      <div className="logo-container">
        <img src="/favicon.ico" alt="Logo" className="logo" />
        <span className="brand-text">Give&Take</span>
      </div>

      <div className="search-container">
        <input type="text" placeholder="Search" className="search-input" />
        <FaSearch className="search-icon" />
      </div>

      <div className="icons-container">
        <FaRegCommentDots className="toolbar-icon large-icon" />
        <MdPerson className="toolbar-icon large-icon bold-icon" />

        <div className="toolbar-icon" onClick={toggleMenu}>
          <FaBars />
        </div>
      </div>
    </header>
  );
};

export default ToolBar;
