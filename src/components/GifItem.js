import React from 'react';
import PropTypes from 'prop-types';

export const GifItem = ({ title, url }) => {
  return (
    <div className='card animate__animated animate__fadeIn'>
      <img className='card__image' src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
