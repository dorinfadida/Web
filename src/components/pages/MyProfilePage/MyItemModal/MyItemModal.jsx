import React from 'react';
import './MyItemModal.css';
import ItemDetails from '../../ItemPage/ItemDetails/ItemDetails';
import ItemGallery from '../../ItemPage/ItemGallery/ItemGallery';

const MyItemModal = ({ item, onClose }) => {
  return (
    <div className="my-item-overlay" onClick={onClose}>
      <div className="my-item-window" onClick={(e) => e.stopPropagation()}>
        <button className="close-button-my-item" onClick={onClose}>×</button>
        <div className="my-item-grid">
            <div className="item-details-wrapper">
                <div className="details-with-edit">
                    <ItemDetails
                        name={item.name}
                        category={item.category}
                        description={item.description}
                        story={item.story}
                        isModalView={true}
                    />
                    <button className="edit-item-button" onClick={() => console.log("Edit clicked")}>
                        <img src="/icons/edit_item.svg" alt="Edit" />
                    </button>
                </div>
                
                <div className="my-item-actions">
                    <button className="taken-btn">Taken</button>
                    <button className="delete-btn">Delete item</button>
                </div>
            </div>
            <div className="gallery-wrapper">
                <ItemGallery images={[item.imageUrl, ...(item.images?.filter(img => img !== item.imageUrl) || [])]} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default MyItemModal;
