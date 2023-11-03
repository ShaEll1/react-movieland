
import React, { useState } from 'react';
import MovieDetails from './MovieDetails';

const MovieCard = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="movie"
      key={movie?.imdb}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <p>{movie?.Year}</p>
      </div>

      <div>
        <img
          src={movie?.Poster !== 'N/A' ? movie?.Poster : 'https://via.placeholder.com/400'}
          alt={movie?.Title}
        />
      </div>

      <div>
        <span>{movie?.Type}</span>
        <h3>{movie?.Title}</h3>

        {isHovered && <MovieDetails movie={movie} onClose={() => setIsHovered(false)} />}
      </div>
    </div>
  );
};

export default MovieCard;