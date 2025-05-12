// components/pages/ItemPage/OfferSwapButton/OfferSwapButton.jsx
import React from 'react';
import './OfferSwapButton.css';

export default function OfferSwapButton({ onClick }) {
  return (
    <button className="offer-swap-button" onClick={onClick}>
      Offer a Swap
    </button>
  );
}
