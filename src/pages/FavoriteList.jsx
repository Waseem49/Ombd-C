import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

const FavoriteList = () => {
  const [data] = useState(JSON.parse(localStorage.getItem("movie")) || []);
  const location = useLocation();
  console.log(location);
  const [originalData, setOriginalData] = useState(data);
  const [movies, setMovies] = useState(data);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [genres, setGenres] = useState([]);
  const [releaseDates, setReleaseDates] = useState([]);
  const [noDataMessage, setNoDataMessage] = useState("");

  useEffect(() => {
    const extractedGenres = [...new Set(data?.map((movie) => movie.Genre))];
    const extractedReleaseDates = [
      ...new Set(data.map((movie) => movie.Released)),
    ];
    setOriginalData(data);
    setMovies(data);
    setSelectedGenre("");
    setSelectedDate("");
    setSortBy("");
    setGenres(extractedGenres);
    setReleaseDates(extractedReleaseDates);
  }, []);

  const applyFiltersAndSort = (moviesToFilter) => {
    let filteredMovies = [...moviesToFilter];

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

    return filteredMovies;
  };

  const handleSortByRating = () => {
    setSortBy("rating");
    setMovies(applyFiltersAndSort(originalData));
  };

  const handleFilterByGenre = (selectedGenre) => {
    setSelectedGenre(selectedGenre);
    setMovies(applyFiltersAndSort(originalData));
  };

  const handleFilterByReleaseDate = (selectedDate) => {
    setSelectedDate(selectedDate);
    setMovies(applyFiltersAndSort(originalData));
  };

  useEffect(() => {
    if (movies.length === 0) {
      setNoDataMessage();
    } else {
      setNoDataMessage("");
    }
  }, [movies]);

  return (
    <div>
      <div className="sort-filter-container">
        <div className="sort-filter-options">
          <h2>
            Movies &gt;
            <span className="locatspan">{location.pathname.slice(1)}</span>
          </h2>
          <div>
            <button onClick={handleSortByRating}>Sort by Rating</button>
            <select
              className="custom-select"
              onChange={(e) => handleFilterByGenre(e.target.value)}>
              <option value="">Filter by Genre</option>
              {genres.map((genre, index) => (
                <option key={index} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
            <select
              className="custom-select"
              onChange={(e) => handleFilterByReleaseDate(e.target.value)}>
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
      {noDataMessage && <p>{noDataMessage}</p>}
      <div className="movie-grid">
        {movies?.length > 0 ? (
          movies?.map((movie, index) => <MovieCard key={index} movie={movie} />)
        ) : (
          <p>No such movies found.....</p>
        )}
      </div>
    </div>
  );
};

export default FavoriteList;
