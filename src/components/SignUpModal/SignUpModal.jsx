import React, { useState } from 'react';
import './SignUpModal.css';
import { categoryOptions } from '../pages/HomePage/Search/FilterComponent/filterOptions';
import MockGoogleButton from '../GoogleSigning/GoogleSigning';

const SignUpModal = ({ onClose, onComplete }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onComplete({
      name,
      email,
      phone,
      photo,
      interests: selectedCategories,
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <h2 className="modal-title">Create Your Account</h2>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Your full name"
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
            />
          </div>

          <div className="form-group">
            <label>Phone Number:</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+123456789"
            />
          </div>

          <div className="form-group">
            <label>Upload Profile Photo:</label>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            {photoPreview && (
              <img src={photoPreview} alt="Preview" className="photo-preview" />
            )}
          </div>

          <div className="form-group">
            <label>Swapping Interests:</label>
            <div className="category-buttons">
              {categoryOptions.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`category-button ${selectedCategories.includes(cat) ? 'selected' : ''}`}
                  onClick={() => toggleCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

        <div className="google-button-wrapper">
        <MockGoogleButton
            onClick={() => {
            console.log('Mock Google Sign-Up clicked');
            onComplete({
                name: 'Google User',
                email: 'googleuser@example.com',
                phone: '',
                photo: null,
                interests: ['📚 Books & Magazines'],
            });
            }}
        />
        </div>


          <button type="submit" className="submit-button">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpModal;
