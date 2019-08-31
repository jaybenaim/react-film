import React, { Component } from "react";
import TMDB from "./TMDB";

const FilmListing = ({ listings, title }) => {
  return (
    <div>
      <h1>{title}</h1>
      {/* <img src={poster_path} alt={title} /> */}
    </div>
  );
};

export default FilmListing;
