// HomePage.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieSearch from "../components/MovieSearch";
import MovieDetails from "../components/MovieDetails";

const HomePage = () => {
  const [movie, setmovie] = useState({
    Title: "Cat",
    Year: "2022",
    Rated: "TV-MA",
    Released: "09 Dec 2022",
    Runtime: "N/A",
    Genre: "Crime, Drama, Thriller",
    Director: "N/A",
    Writer: "N/A",
    Actors: "Randeep Hooda, Abhishant Rana, Suvinder Vicky",
    Plot: "A former police informant is forced to become an informant again to save the life of his brother, which forces him to come to terms with his dark past.",
    Language: "Punjabi",
    Country: "India",
    Awards: "1 win & 3 nominations",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGFkOTBhYmItODMzMC00NzQ1LTg3NTctZDdiYTMwZjFlMDM3XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    Ratings: [{ Source: "Internet Movie Database", Value: "8.2/10" }],
    Metascore: "N/A",
    imdbRating: "2.1",
    imdbVotes: "12,346",
    imdbID: "tt22297578",
    Type: "series",
    totalSeasons: "N/A",
    Response: "True",
  });
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showmodal, setshowmodal] = useState(true);
  console.log(showmodal);

  const getMovie = async (imdbId) => {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?i=${imdbId}&apikey=3b7d9ce`
    );
    setmovie(data);
  };

  const searchResult = async () => {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=f9d55ac1&s=${
        search?.length > 3 ? "" : search
      }&page=1`
    );
    setSearchResults(data.Search);
  };

  useEffect(() => {
    searchResult();
    setshowmodal(true);
  }, [search]);

  return (
    <>
      <div className="mainlist">
        <input
          id="input"
          type="text"
          placeholder="Search Movie Title..."
          onChange={(e) => setSearch(e.target.value)}
        />
        {searchResults?.length > 0 && showmodal && (
          <div className="searchList">
            {searchResults?.map((el) => (
              <MovieSearch
                key={el.imdbID}
                {...el}
                getMovie={getMovie}
                setshowmodal={setshowmodal}
                setSearch={setSearch}
              />
            ))}
          </div>
        )}
      </div>
      <MovieDetails movie={movie} />
    </>
  );
};

export default HomePage;
