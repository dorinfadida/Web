import React from 'react';
import { FaSearch } from 'react-icons/fa';
import FilterComponent from './FilterComponent/FilterComponent';
import './Search.css';

export const SearchBar = () => {
  return (

    <div className="search-wrapper">
        <div className="search-container">
          <input type="text" placeholder="Search" className="search-input" />
          <FaSearch className="search-icon" />
        </div>

      <div className="search-options">
          <FilterComponent />
      </div>
    </div>

  );
};

export default SearchBar;