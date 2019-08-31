import React from "react";
import Fave from "../Fave";
const FilmRow = ({ listing, title, posterPath, year, onFilmClick }) => {
  const newPosterPath = "https://image.tmdb.org/t/p/w780/" + posterPath;
  const fullYear = new Date(year);

  return (
    <div className="film-row" onClick={() => onFilmClick(listing)}>
      <img src={newPosterPath} alt={title}></img>
      <div className="film-summary">
        <h1>{title}</h1>
        <p>{fullYear.getFullYear()}</p>
      </div>
      <Fave />
    </div>
  );
};

export default FilmRow;
