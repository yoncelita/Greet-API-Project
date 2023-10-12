import React from 'react';

export const SortDropdown = ({ onSortChange }) => {
  return (
    <select onChange={(e) => onSortChange(e.target.value)}>
      <option value="name">Sort by Name</option>
      <option value="price">Sort by Price</option>
    </select>
  );
};
