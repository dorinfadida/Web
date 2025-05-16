import React from 'react';
import { categoryOptions, distanceOptions } from './filterOptions';
import './FilterComponent.css';

export const FilterComponent = () => {
  return (
    <div className="filter-bar">
      <div className="filter-text">Category</div>
      <select className="filter-select">
        {categoryOptions.map((cat, i) => (
          <option key={i} value={cat}>{cat}</option>
        ))}
      </select>

      <div className="filter-text">Distance</div>
      <select className="filter-select">
        {distanceOptions.map((d, i) => (
          <option key={i} value={d.value}>{d.label}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterComponent;
