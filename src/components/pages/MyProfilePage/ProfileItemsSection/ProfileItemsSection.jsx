// src/pages/MyProfilePage/ProfileItemsSection/ProfileItemsSection.jsx

import React from 'react';
import { ItemCard } from '../../../ItemCard/ItemCard';
import './ProfileItemsSection.css';

const mockItems = [
    {
      name: 'Baby Stroller',
      category: '👶 Baby Gear & Equipment',
      description: "Lightweight and compact baby stroller, perfect for everyday use and travel.Its easy fold mechanism and carrying strap make it ideal for parents on the go. Designed with comfort and safety in mind, it includes a reclining seat and secure harness system.",
      story: "It carried more than just our baby — it carried memories. From quiet walks to airport gates, it made every journey feel effortless. Folding it with one hand while holding tiny fingers with the other — that’s the magic it brought. Now it’s ready to be part of someone else’s beautiful adventure.",
      imageUrl: 'https://mythriftbabyloot.com/wp-content/uploads/2024/08/1-57.jpeg',
      listedsince: "5 Days",
      images: [
        'https://cdn.shopify.com/s/files/1/0023/3042/7447/files/Premium-3-in-1-Baby-Stroller-Maternity-Miracles-Luxury-Baby-Strollers-Maternity-Gifts-22_3b893299-ac5e-426e-82d3-ff3bf4ce9382.jpg?v=1699557165',
        'https://media.karousell.com/media/photos/products/2020/9/20/used_stroller_for_sale_1600576229_89917b32_progressive.jpg',
      ]
    },
    {
      name: 'Wooden Puzzle',
      category: '🧸 Toys & Games',
      imageUrl: 'https://i.ebayimg.com/00/s/MTE1OFgxMzU2/z/Uf0AAOSwgM5hhmYE/$_57.JPG?set_id=8800005007',
      listedsince: "2 Weeks",
    },
    {
      name: 'Travel Backpack',
      category: '🎒 Bags & Luggage',
      imageUrl: 'https://www.samsonite.co.uk/dw/image/v2/AATF_PRD/on/demandware.static/-/Library-Sites-sams-content-library/default/dwc717fe7b/highlight/highlight_ecodiver-lifestyle-1/highlight_ecodiver-lifestyle-1.jpg?sw=646&sh=646',
      listedsince: "1 Month",
    },
  ];

const ProfileItemsSection = ({ onAddItem, onItemClick }) => {
  return (
    <div className="profile-items-section">
      <div className="section-header">
        <h2 className="section-title">Ready to Give</h2>
        <button className="add-item-button" onClick={onAddItem}>
          <img src="/icons/plus-square.svg" alt="Add item" />
        </button>
      </div>
      <div className="items-grid">
        {mockItems.map((item, i) => (
          <ItemCard key={i} name={item.name} category={item.category} imageUrl={item.imageUrl} listedSince={item.listedsince} onClick={() => onItemClick(item)} />
        ))}
      </div>
    </div>
  );
};

export default ProfileItemsSection;
