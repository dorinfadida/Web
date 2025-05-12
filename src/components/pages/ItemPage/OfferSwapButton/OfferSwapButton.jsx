import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OfferSwapButton.css';

export default function OfferSwapButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/trade");
  };

  return (
    <button className="offer-swap-button" onClick={handleClick}>
      Offer a Swap
    </button>
  );
}
