import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MenuSideBar.css';
import MenuButton from './MenuButton/MenuButton';
import {
  FaHandshake,
  FaBoxOpen,
  FaPlusCircle,
  FaCompass,
  FaUserAlt,
  FaCog
} from 'react-icons/fa';

const MenuSideBar = ({ onClose }) => {const navigate = useNavigate();

  const handleNavigate = (path) => { navigate(path); onClose();};

  return (
    <div className="menu-sidebar-overlay" onClick={onClose}>
      <div className="menu-sidebar" onClick={(e) => e.stopPropagation()}>
        <MenuButton icon={<FaCompass />} text="Discover" onClick={() => handleNavigate('/discover')} />
        <MenuButton icon={<FaPlusCircle />} text="Add Items" onClick={() => handleNavigate('/add')} />
        <MenuButton icon={<FaBoxOpen />} text="My Items" onClick={() => handleNavigate('/my-items')} />
        <MenuButton icon={<FaHandshake />} text="Bids Center" onClick={() => handleNavigate('/bids-center')} />
        <MenuButton icon={<FaUserAlt />} text="Profile" onClick={() => handleNavigate('/profile')} />
        <MenuButton icon={<FaCog />} text="Settings" onClick={() => handleNavigate('/settings')} />
      </div>
    </div>
  );
};

export default MenuSideBar;
