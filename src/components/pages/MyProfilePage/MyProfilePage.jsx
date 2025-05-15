import React, { useState } from 'react';
import mockUserProfile from './MockUserProfile';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import ProfileItemsSection from './ProfileItemsSection/ProfileItemsSection';
import AddItemModal from './AddItemModal/AddItemModal';
import MyItemModal from './MyItemModal/MyItemModal'; 
import './MyProfilePage.css';

const MyProfilePage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); 

  return (
    <div className="my-profile-page">
      <ProfileHeader user={mockUserProfile} />
      <ProfileItemsSection
        onAddItem={() => setModalOpen(true)}
        onItemClick={(item) => setSelectedItem(item)} 
      />
      {isModalOpen && <AddItemModal onClose={() => setModalOpen(false)} />}
      {selectedItem && (
        <MyItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
};

export default MyProfilePage;
