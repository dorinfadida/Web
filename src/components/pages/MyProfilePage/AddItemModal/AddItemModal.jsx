import React, { useState } from 'react';
import './AddItemModal.css';

const AddItemModal = ({ onClose }) => {
  const [itemName, setItemName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
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

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <h2 className="modal-title">Add New Item</h2>

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
            <div className="description-header">
              <span className="description-label">Description:</span>
              <div className="ai-style-wrapper">
              <button
                type="button"
                className="ai-style-button"
                onClick={() => setShowStyleOptions(prev => !prev)}
                title="Generate with AI"
              >
                <img src="/icons/ai_generate_text.svg" alt="Generate Description" className="ai-icon" />
              </button>
              {showStyleOptions && (
                <ul className="style-dropdown">
                  {["Standard", "Literary", "Funny", "Professional", "Bold & Catchy"].map((style) => (
                    <li key={style} onClick={() => {
                      setShowStyleOptions(false);
                      console.log("Selected style:", style);
                    }}>
                      {style}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            </div>
            <textarea
              rows="4"
              placeholder="Add a short description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button type="submit" className="add-item-btn">Add Item</button>
        </form>
      </div>
    </div>
  );
};

export default AddItemModal;
