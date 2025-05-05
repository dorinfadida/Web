import React from "react";
import "./ToolBar.css";
import { FaSearch, FaRegCommentDots } from "react-icons/fa";
import { MdPerson } from "react-icons/md";

const ToolBar = () => {
  return (
    <header className="toolbar">
      <div className="logo-container">
        <img src="/favicon.ico" alt="Logo" className="logo" />
         <span className="brand-text">GIVE N TAKE</span>
</div>
   

      <div className="search-container">
        <input type="text" placeholder="Search" className="search-input" />
        <FaSearch className="search-icon" />
      </div>

      <div className="icons-container">
        <FaRegCommentDots className="toolbar-icon large-icon" />
        <MdPerson className="toolbar-icon large-icon bold-icon" />
      </div>
    </header>
  );
};

export default ToolBar;


