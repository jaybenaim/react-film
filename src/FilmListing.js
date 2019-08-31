import React, { Component } from "react";
import TMDB from "./TMDB";
import FilmRow from "./FilmRow";

const FilmListing = ({ listings, title }) => {
  const filmElements = listings.map((film, i) => (
    <FilmRow
      key={i}
      listing={film}
      title={film.title}
      year={film.release_date}
      backdropPath={film.backdrop_path}
      posterPath={film.poster_path}
    />
  ));
  return (
    <div>
      {/* <FilmRow listings={listings} /> */}

      {filmElements}
      {/* <h1>{title}</h1> */}
      {/* <img src={poster_path} alt={title} /> */}
    </div>
  );
};

export default FilmListing;
