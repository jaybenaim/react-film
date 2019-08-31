import React from "react";
import FilmRow from "./FilmRow";
import Fave from "./Fave";

const FilmListing = ({ listings, onFilmClick }) => {
  const filmElements = listings.map((film, i) => (
    <div>
      <FilmRow
        key={i}
        listing={film}
        title={film.title}
        year={film.release_date}
        posterPath={film.poster_path}
        onFilmClick={onFilmClick}
      />
    </div>
  ));
  return <div>{filmElements}</div>;
};

export default FilmListing;
