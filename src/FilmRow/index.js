import React from "react";

const FilmRow = ({ listings, title, posterPath }) => {
  const newPosterPath = "https://image.tmdb.org/t/p/w780/" + posterPath;
  return (
    <div>
      <h1>{title}</h1>
      <img src={newPosterPath} alt={title}></img>
    </div>
  );
};

export default FilmRow;
