import { Button } from '../Button/Button';
import './Card.css';
import React from 'react';

export const Card = ({ greetData }) => {
    const { name, images, short_description, categories } = greetData;

    // Get the first image URL
    const imageUrl = images.length > 0 ? images[0].src : '';

    // Get the first category name
    const categoryName = categories.length > 0 ? categories[0].name : '';

    return (
        <div className={`card-container ${categoryName.toLowerCase()}-category`}>
            <div className='card-header'>
                <div className='card-heading'>
                    <h3>{categoryName}</h3>
                </div>
                <div className='card-image-container' style={{ backgroundImage: `url(${imageUrl})` }}></div>
            </div>
            <div className='card-body'>
                <div className='card-body-container'>
                    <h2 dangerouslySetInnerHTML={{ __html: name }} />
                    <p dangerouslySetInnerHTML={{ __html: short_description }} />
                </div>
                <Button />
            </div>
        </div>
    );
};

