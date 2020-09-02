import React from 'react';

export const GifItem = ({ id, title, url }) => {
  return (
    <div className='card animate__animated animate__fadeIn'>
      <img className='card__image' src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
