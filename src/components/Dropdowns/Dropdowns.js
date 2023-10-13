import React from 'react';

export const SortDropdown = ({ onSortChange }) => {
  return (
    <select onChange={(e) => onSortChange(e.target.value)}>
      <option value="default">Подреди по --</option>
      <option value="name">Подреди по Име</option>
      <option value="price">Подреди по Цена</option>
    </select>
  );
};



export const CategoryDropdown = ({ onCategoryChange, categories }) => {
  const handleCategoryChange = (value) => {
    if (onCategoryChange) {
      onCategoryChange(value);
    }
  };

  return (
    <select onChange={(e) => handleCategoryChange(e.target.value)}>
      <option value="default">Избери категория --</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

