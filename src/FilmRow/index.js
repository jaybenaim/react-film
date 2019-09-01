import React from "react";
import Fave from "../Fave";
const FilmRow = ({
  listing,
  title,
  posterPath,
  year,
  onFilmClick,
  onFaveToggle
}) => {
  const newPosterPath = "https://image.tmdb.org/t/p/w780/" + posterPath;
  const fullYear = new Date(year);

  const handleDetailsClick = film => {
    console.log("Fetching details for " + film.title);
  };

  return (
    <div
      className="film-row"
      onClick={() => {
        onFilmClick(listing);
        handleDetailsClick(listing);
      }}
    >
      <img src={newPosterPath} alt={title}></img>
      <div className="film-summary">
        <h1>{title}</h1>
        <p>{fullYear.getFullYear()}</p>
      </div>
      <Fave onFaveToggle={onFaveToggle} listing={listing} />
    </div>
  );
};

export default FilmRow;
