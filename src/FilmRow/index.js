import React from "react";

const FilmRow = ({ listings, title, posterPath, backdropPath, year }) => {
  const newPosterPath = "https://image.tmdb.org/t/p/w780/" + posterPath;
  const newBackdropPath = "https://image.tmdb.org/t/p/w1280/" + backdropPath;
  const fullYear = new Date(year);
  return (
    <div className="film-row">
      <img src={newPosterPath} alt={title}></img>
      {/* <img src={newBackdropPath} alt={title}></img> */}
      <div className="film-summary">
        <h1>{title}</h1>
        <p>{fullYear.getFullYear()}</p>
      </div>
    </div>
  );
};

export default FilmRow;
