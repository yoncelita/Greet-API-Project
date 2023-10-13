import React from 'react';
import { SortDropdown, CategoryDropdown } from '../Dropdowns/Dropdowns';
import './Header.css';

export const Header = ({ onSortChange, onCategoryChange, categories }) => {
    return (
        <>
            <div className='logo-container'>
                <img src='/images/logo.png' alt='' />
            </div>
            <nav className="navbar">
                <div className="container">
                    <div className="sort-dropdown">
                        <SortDropdown onSortChange={onSortChange} />
                    </div>
                    <div className='category-dropdown'>
                        <CategoryDropdown onCategoryChange={onCategoryChange} categories={categories} />
                    </div>
                </div>
            </nav>
        </>
    );
};
