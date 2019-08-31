import React from "react";
import FilmPoster from "./FilmPoster";

const FilmDetails = ({ listings }) => {
  const filmPosters = listings.map((film, i) => (
    <FilmPoster key={i} listing={film} backdropPath={film.backdrop_path} />
  ));

  return (
    <div>
      <h1>Details</h1>
      <p>{filmPosters}</p>
    </div>
  );
};

export default FilmDetails;
