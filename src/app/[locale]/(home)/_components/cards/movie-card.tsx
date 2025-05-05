import React from 'react';

type MoviePosterProps = {
  path: string | undefined;
  alt?: string;
  className?: string;
};

const MovieCard: React.FC<MoviePosterProps> = ({ path, alt = '', className = '' }) => {
  return <img src={path} className={className} alt={alt} />;
};

export default MovieCard;
