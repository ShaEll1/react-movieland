
import React from 'react';

const MovieDetails = ({ movie, onClose }) => {
  const { Title, Year, Type, Plot, imdbRating } = movie;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{Title}</h2>
        <p>Year: {Year}</p>
        <p>Type: {Type}</p>
        <p>Plot: {Plot || 'Plot not available'}</p>
        <p>Rating: {imdbRating || 'Rating not available'}</p>
        
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default MovieDetails;