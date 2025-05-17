// Updated SearchBar.jsx
import React, { useState } from 'react';
import { FaSearch, FaFilter } from 'react-icons/fa';
import FilterComponent from './FilterComponent/FilterComponent';
import './Search.css';

export const SearchBar = () => {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => setShowFilters(prev => !prev);

  return (
    <div className="search-wrapper">
      <div className="search-container">
        <input type="text" placeholder="Search" className="search-input" />
        <FaSearch className="search-icon" />
        <FaFilter className="filter-icon" onClick={toggleFilters} />
      </div>

      {showFilters && (
        <div className="search-options">
          <FilterComponent />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
