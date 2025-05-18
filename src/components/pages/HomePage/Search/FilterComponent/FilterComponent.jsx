import React, { useState } from 'react';
import { categoryOptions, distanceOptions } from './filterOptions';
import './FilterComponent.css';

export const FilterComponent = () => {
  const [personalize, setPersonalize] = useState(true);

  const handleApply = () => {
    console.log('Apply clicked');
    // Trigger your filter logic here
  };

  return (
    <div className="filter-bar">
      <div className="preference-checkbox">
        <input
          type="checkbox"
          id="personalize"
          checked={personalize}
          onChange={() => setPersonalize(!personalize)}
        />
        <label htmlFor="personalize">Personalized Items</label>
      </div>

      <div className="filter-group">
        <div className="filter-text">Category</div>
        <select className="filter-select" disabled={personalize}>
          {categoryOptions.map((cat, i) => (
            <option key={i} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <div className="filter-text">Distance</div>
        <select className="filter-select">
          {distanceOptions.map((d, i) => (
            <option key={i} value={d.value}>{d.label}</option>
          ))}
        </select>
      </div>

      <button className="apply-button" onClick={handleApply}>
        Apply
      </button>
    </div>
  );
};

export default FilterComponent;
