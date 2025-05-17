import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import ToolBar from './components/ToolBar/ToolBar';
import MenuSideBar from './components/MenuSideBar/MenuSideBar';
import HomePage from './components/pages/HomePage/HomePage';
import BidsCenter from './components/pages/BidsCenter/BidsCenter';
import MyProfilePage from './components/pages/MyProfilePage/MyProfilePage';
import MakeABidPage from './components/pages/MakeABidPage/MakeABidPage';
import AddItemModal from './components/pages/MyProfilePage/AddItemModal/AddItemModal';
import SignUpModal from './components/SignUpModal/SignUpModal';
import SignInModal from './components/SignInModal/SignInModal';


function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <div className="app-container">
    <ToolBar
      toggleMenu={toggleMenu}
      isSignedIn={isSignedIn}
      onSignUpClick={() => setIsSignUpModalOpen(true)}
      onSignInClick={() => setIsSignInModalOpen(true)}
    />

    {isSignUpModalOpen && (
    <SignUpModal
      onClose={() => setIsSignUpModalOpen(false)}
      onComplete={(userInfo) => {
        console.log('User signed up:', userInfo);
        setIsSignedIn(true);
        setIsSignUpModalOpen(false);
      }}/>)}
      

    {isSignInModalOpen && (
      <SignInModal
        onClose={() => setIsSignInModalOpen(false)}
        onComplete={(userInfo) => {
          console.log('User signed in:', userInfo);
          setIsSignedIn(true);
          setIsSignInModalOpen(false);
        }}
      />
    )}

      
      {isMenuOpen && (
        <MenuSideBar
          onClose={toggleMenu}
          openAddModal={() => {
            setIsAddModalOpen(true);
            setIsMenuOpen(false);
          }}
        />
      )}

      {isAddModalOpen && (
        <AddItemModal onClose={() => setIsAddModalOpen(false)} />
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/discover" element={<HomePage />} />
        <Route path="/bids-center" element={<BidsCenter />} />
        <Route path="/profile" element={<MyProfilePage />} />
        <Route path="/make-a-bid/:itemId" element={<MakeABidPage />} />
      </Routes>
    </div>
  );
}

export default App;
