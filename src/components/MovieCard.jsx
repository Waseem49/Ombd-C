import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} />
      <h2>{movie.Title}</h2>
      <p>Rating: {movie.imdbRating}</p>
      <p>Genre: {movie.Genre}</p>
    </div>
  );
};

export default MovieCard;
