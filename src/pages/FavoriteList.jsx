import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { useLocation } from "react-router-dom";

const FavoriteList = () => {
  const [data] = useState(JSON.parse(localStorage.getItem("movie")) || []);
  const location = useLocation();
  const [originalData] = useState(data);
  const [movies, setMovies] = useState(data);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [genres, setGenres] = useState([]);
  const [releaseDates, setReleaseDates] = useState([]);

  useEffect(() => {
    const extractedGenres = [
      ...new Set(originalData?.map((movie) => movie.Genre)),
    ];
    const extractedReleaseDates = [
      ...new Set(originalData.map((movie) => movie.Released)),
    ];
    setGenres(extractedGenres);
    setReleaseDates(extractedReleaseDates);
  }, [originalData]);

  useEffect(() => {
    let filteredMovies = [...originalData];

    if (selectedGenre !== "") {
      filteredMovies = filteredMovies.filter((movie) =>
        movie.Genre.toLowerCase().includes(selectedGenre.toLowerCase())
      );
    }

    if (selectedDate !== "") {
      filteredMovies = filteredMovies.filter(
        (movie) => movie.Released === selectedDate
      );
    }

    if (sortBy === "year") {
      filteredMovies.sort((a, b) => a.Year - b.Year);
    } else if (sortBy === "rating") {
      filteredMovies.sort((a, b) => b.imdbRating - a.imdbRating);
    }
    setMovies(filteredMovies);
  }, [selectedGenre, selectedDate, sortBy, originalData]);

  return (
    <div>
      <div className="sort-filter-container">
        <div className="sort-filter-options">
          <h2>
            Movies &gt;
            <span className="locatspan">
              {" " + location.pathname.slice(1)}
            </span>
          </h2>
          <div>
            <button onClick={() => setSortBy("rating")}>Sort by Rating</button>
            <select
              className="custom-select"
              onChange={(e) => setSelectedGenre(e.target.value)}>
              <option value="">Filter by Genre</option>
              {genres.map((genre, index) => (
                <option key={index} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
            <select
              className="custom-select"
              onChange={(e) => setSelectedDate(e.target.value)}>
              <option value="">Filter by Release Date</option>
              {releaseDates.map((date, index) => (
                <option key={index} value={date}>
                  {date}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="movie-grid">
        {movies?.length > 0 ? (
          movies?.map((movie, index) => <MovieCard key={index} movie={movie} />)
        ) : (
          <h2>Movies not found in FavoriteList.....</h2>
        )}
      </div>
    </div>
  );
};

export default FavoriteList;
