import React, { useContext } from "react";
import { Mycontext } from "../context/MyContext";

const MovieSearch = (props) => {
  const { setSearch, setshowmodal, getMovie } = useContext(Mycontext);

  const handleclick = (e) => {
    setSearch("");
    setshowmodal((p) => !p);
    getMovie(props.imdbID);
  };
  return (
    <div className="searchitem" onClick={handleclick}>
      <img src={props?.Poster} alt="" />
      <div className="searchtitle">
        <h4>{props.Title}</h4>
        <h4>{props.Year}</h4>
      </div>
    </div>
  );
};

export default MovieSearch;
