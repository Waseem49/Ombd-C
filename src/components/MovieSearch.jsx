import React from "react";

const MovieSearch = (props) => {
  const handleclick = (e) => {
    props.setSearch("");
    props.getMovie(props.imdbID);
    props.setshowmodal((p) => !p);
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
