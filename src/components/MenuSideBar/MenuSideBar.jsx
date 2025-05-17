import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MenuSideBar.css';
import MenuButton from './MenuButton/MenuButton';
import {
  FaHandshake,
  FaPlusCircle,
  FaCompass,
  FaUserAlt,
  FaSignOutAlt,
} from 'react-icons/fa';

const MenuSideBar = ({ onClose, openAddModal }) => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <div className="menu-sidebar-overlay" onClick={onClose}>
      <div className="menu-sidebar" onClick={(e) => e.stopPropagation()}>
        <MenuButton icon={<FaCompass />} text="Discover" onClick={() => handleNavigate('/discover')} />
        <MenuButton icon={<FaPlusCircle />} text="Add Items" onClick={() => { openAddModal(); onClose(); }} />
        <MenuButton icon={<FaHandshake />} text="Bids Center" onClick={() => handleNavigate('/bids-center')} />
        <MenuButton icon={<FaUserAlt />} text="Profile" onClick={() => handleNavigate('/profile')} />
        <MenuButton icon={<FaSignOutAlt />} text="Sign Out" onClick={() => handleNavigate('/settings')} />
      </div>
    </div>
  );
};

export default MenuSideBar;

