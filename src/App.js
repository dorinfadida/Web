import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import ToolBar from './components/ToolBar/ToolBar';
import MenuSideBar from './components/MenuSideBar/MenuSideBar';
import HomePage from './components/pages/HomePage/HomePage';
import BidsCenter from './components/pages/BidsCenter/BidsCenter';
import MyProfilePage from './components/pages/MyProfilePage/MyProfilePage';
import TradePage from './components/pages/TradePage/TradePage';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <div className="app-container">
      <ToolBar toggleMenu={toggleMenu} />
      {isMenuOpen && <MenuSideBar onClose={toggleMenu} />}
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/discover" element={<HomePage />} />
        <Route path="/bids-center" element={<BidsCenter />} />
        <Route path="/profile" element={<MyProfilePage />} />
        <Route path="/trade" element={<TradePage />} />
      </Routes>
    </div>
  );
}

export default App;
