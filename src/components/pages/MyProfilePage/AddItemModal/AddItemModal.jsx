import React, { useState } from 'react';
import './AddItemModal.css';

const mockStories = {
  "Funny": "When my kid started belting out Power Rangers songs during Zoom calls – these headphones saved my job. They're wireless, but our connection was stronger than ever. I even accidentally paired them to the neighbor’s laptop – she says thanks. If they survived my son, they can survive anything.",
  "Poetic": "In the noise of day, they brought me peace, Between laughter and cries – they wrapped my ears in silence. On waves of Zoom, we sailed – no cords, no chaos. Now they journey on – to accompany a new soul.",
  "Emotional": "Every morning, as the world entered through my screen, they wrapped me in quiet. My son played in the background – I worked. Thanks to them. They were a small bridge between home and work, between noise and focus. Now I pass them on with love, hoping they serve someone else just as well.",
  "Storytelling": "It started with a new job and a noisy toddler. I needed focus, clarity, and peace – and these Beats delivered. They’ve been with me through client calls, coffee breaks, and chaos. Now it’s someone else’s turn to make them part of their daily rhythm.",
  "Practical": "Beats wireless headphones – reliable, clear sound, built-in mic, and great noise isolation. Perfect for Zoom calls, remote work, or just tuning out household noise. Pairs easily with phone or laptop, battery life still solid. Lightly used and in good condition – ready to plug into your routine.",
};

const AddItemModal = ({ onClose }) => {
  const [itemName, setItemName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [usedFor, setUsedFor] = useState('');
  const [images, setImages] = useState([]);
  const [story, setStory] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('');
  const [showStyleOptions, setShowStyleOptions] = useState(false);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const previews = files.map(file => URL.createObjectURL(file));
    setImages(previews);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ itemName, category, description, images });
    onClose();
  };

  const handleStyleSelect = (style) => {
    setShowStyleOptions(false);
    setSelectedStyle(style);
    setStory(mockStories[style]);
  };
  
  const handleRefreshClick = () => {
    // Placeholder: no actual story change yet
    console.log("Refresh clicked for style:", selectedStyle);
  };
  return (
    <div className="modal-overlay-add-item" onClick={onClose}>
      <div className="modal-content-add-item" onClick={(e) => e.stopPropagation()}>
        <button className="close-button-add-item" onClick={onClose}>×</button>
        <h2 className="modal-title-add-item">Add New Item</h2>

        <form className="add-item-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Item name:</label>
            <input
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              placeholder="Item name"
              required
            />
          </div>

          <div className="form-group">
            <label>Category:</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="" disabled>Select a category</option>
              <optgroup label="🏠 Household & Living">
                <option>Furniture</option>
                <option>Home Appliances</option>
                <option>Kitchenware</option>
                <option>Lighting & Decor</option>
                <option>Storage & Organization</option>
              </optgroup>
              <optgroup label="👚 Clothing & Fashion">
                <option>Men’s Clothing</option>
                <option>Women’s Clothing</option>
                <option>Shoes & Accessories</option>
                <option>Bags & Luggage</option>
                <option>Baby & Kids Clothing</option>
              </optgroup>
              <optgroup label="🎮 Entertainment & Leisure">
                <option>Books & Magazines</option>
                <option>Board Games & Puzzles</option>
                <option>Toys & Games</option>
                <option>Musical Instruments</option>
                <option>Hobbies & DIY Kits</option>
              </optgroup>
              <optgroup label="💻 Tech & Electronics">
                <option>Phones & Gadgets</option>
                <option>Computers & Accessories</option>
                <option>TVs & Media Devices</option>
                <option>Gaming Consoles & Gear</option>
              </optgroup>
              <optgroup label="🌿 Outdoor & Lifestyle">
                <option>Sports & Outdoors</option>
                <option>Camping & Travel Gear</option>
                <option>Garden & Plants</option>
              </optgroup>
              <optgroup label="👶 Family & Kids">
                <option>Baby Gear & Equipment</option>
                <option>Educational Materials</option>
              </optgroup>
              <optgroup label="🐶 Pets">
                <option>Pet Supplies & Accessories</option>
              </optgroup>
            </select>
          </div>

          <div className="form-group">
            <label>Upload Photos:</label>
            <input type="file" multiple accept="image/*" onChange={handleFileChange} />
          </div>

          {images.length > 0 && (
            <div className="image-preview-gallery">
              {images.map((src, i) => (
                <img key={i} src={src} alt={`preview-${i}`} className="preview-img" />
              ))}
            </div>
          )}

<div className="form-group">
            <label>Description:</label>
            <textarea
              rows="3"
              placeholder="Add a short description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>How did this item serve you?</label>
            <textarea
              rows="3"
              placeholder="Explain how the item was used and why people should take it..."
              value={usedFor}
              onChange={(e) => setUsedFor(e.target.value)}
            />
          </div>

          <div className="form-group">
            <div className="description-header">
              <span className="description-label">Item Story:</span>
              <div className="ai-style-wrapper">
                <button
                  type="button"
                  className="ai-style-button"
                  onClick={() => setShowStyleOptions(prev => !prev)}
                  title="Generate Story"
                >
                  <img src="/icons/ai_generate_text.svg" alt="AI" className="ai-icon" />
                </button>
                {selectedStyle && (
                  <span className="selected-style">{selectedStyle}</span>
                )}
                {selectedStyle && (
                  <button
                    type="button"
                    className="refresh-button"
                    onClick={handleRefreshClick}
                    title="Refresh story"
                  >
                    <img src="/icons/refresh.svg" alt="Refresh" className="refresh-icon" />
                  </button>
                )}
                {showStyleOptions && (
                  <ul className="style-dropdown">
                    {Object.keys(mockStories).map((style) => (
                      <li key={style} onClick={() => handleStyleSelect(style)}>
                        {style}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="story-box">{story || <span className="placeholder">Choose a style to generate a story...</span>}</div>
          </div>

          <button type="submit" className="add-item-btn">Add Item</button>
        </form>
      </div>
    </div>
  );
};

export default AddItemModal;

