import React from "react";

const FilmPoster = ({ listing, backdropPath }) => {
  const newBackdropPath = "https://image.tmdb.org/t/p/w1280/" + backdropPath;
  return <img src={newBackdropPath} alt={listing.title} />;
};
export default FilmPoster;
