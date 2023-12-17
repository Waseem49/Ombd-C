// HomePage.js
import React, { useContext, useEffect, useState } from "react";
import MovieSearch from "../components/MovieSearch";
import MovieDetails from "../components/MovieDetails";
import { Mycontext } from "../context/MyContext";

const HomePage = () => {
  const {
    searchResults,
    showmodal,
    setshowmodal,
    search,
    setSearch,
    searchResult,
  } = useContext(Mycontext);

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
              <MovieSearch key={el.imdbID} {...el} />
            ))}
          </div>
        )}
      </div>
      <MovieDetails />
    </>
  );
};

export default HomePage;
