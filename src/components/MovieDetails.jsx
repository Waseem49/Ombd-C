import React from "react";

const MovieDetails = ({ movie }) => {
  const moviesinlocalStorage = JSON.parse(localStorage.getItem("movie")) || [];
  // console.log(moviesinlocalStorage);
  const addToFavorite = () => {
    localStorage.setItem(
      "movie",
      JSON.stringify([...moviesinlocalStorage, movie])
    );
  };

  return (
    <div className="movie_details">
      <div className="poster">
        <img src={movie?.Poster} alt="" />
      </div>
      <div>
        <h1 className="title">{movie?.Title}</h1>
        <p>
          <b>Actors:</b>
          {movie?.Actors}
        </p>
        <p>
          <b>Director:</b>
          {movie?.Director}
        </p>
        <p>
          <b>Genre:</b>
          {movie?.Genre}
        </p>
        <p>
          <b>Years:</b>
          {movie?.Year}
        </p>
        <p>
          <b>Story:</b>
          {movie?.Plot}
        </p>
        <p>
          <i>
            <b>Language:</b>
          </i>
          :{movie?.Language}
        </p>
        <div>
          <button onClick={addToFavorite}>Add to Favourite</button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
