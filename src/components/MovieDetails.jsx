import React, { useContext, useState } from "react";
import { Mycontext } from "../context/MyContext";
import { useEffect } from "react";

const MovieDetails = () => {
  const { movie, moviedatalist } = useContext(Mycontext);
  const [text, setText] = useState(
    moviedatalist.some((el) => el.Title === movie.Title)
  );
  const addToFavorite = () => {
    if (!text) {
      localStorage.setItem("movie", JSON.stringify([...moviedatalist, movie]));
      setText(true);
    }
  };

  useEffect(() => {
    setText(moviedatalist.some((el) => el.Title === movie.Title));
    return () => {
      setText(false);
    };
  }, [movie]);

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
          <button onClick={addToFavorite} disabled={text}>
            {text ? "Added" : "Add to Favourite"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
