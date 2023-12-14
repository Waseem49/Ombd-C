import { createContext, useState } from "react";
import { data } from "../db";
import axios from "axios";

export const Mycontext = createContext();

export const ContextProvider = ({ children }) => {
  const [auth] = useState(true);
  const [search, setSearch] = useState("");
  const [movie, setmovie] = useState(data);
  const [searchResults, setSearchResults] = useState([]);
  const [showmodal, setshowmodal] = useState(true);
  const moviedatalist = JSON.parse(localStorage.getItem("movie")) || [];

  const getMovie = async (imdbId) => {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?i=${imdbId}&apikey=3b7d9ce`
    );
    setmovie(data);
  };

  const searchResult = async () => {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=f9d55ac1&s=${search}&page=1`
    );
    setSearchResults(data.Search);
  };

  return (
    <Mycontext.Provider
      value={{
        auth,
        search,
        setSearch,
        movie,
        setmovie,
        searchResults,
        setSearchResults,
        showmodal,
        setshowmodal,
        getMovie,
        searchResult,
        moviedatalist,
      }}>
      {children}
    </Mycontext.Provider>
  );
};
