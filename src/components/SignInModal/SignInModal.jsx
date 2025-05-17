import React, { useState } from 'react';
import './SignInModal.css';
import MockGoogleButton from '../GoogleSigning/GoogleSigning';

const SignInModal = ({ onClose, onComplete }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return;
    onComplete({ email, password });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <h2 className="modal-title">Sign In</h2>

        <form className="signin-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>

        <div className='google-button-wrapper'>
          <MockGoogleButton
            onClick={() => {
              console.log('Mock Google Sign-In clicked');
              onComplete({ name: 'Mock User', email: 'mock@example.com' });
            }}
          />
          </div>

          <button type="submit" className="submit-button">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignInModal;
