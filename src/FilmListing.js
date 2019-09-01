import React, { Component } from "react";
import FilmRow from "./FilmRow";

class FilmListing extends Component {
  state = {
    filter: "all"
  };
  // handleFilterClick = filter => {
  //   console.log(filter);
  // };

  render() {
    const {
      listings,
      onFilmClick,
      onFaveToggle,
      handleFilterClick,
      isFave
    } = this.props;

    const filmElements = listings.map((film, i) => (
      <div>
        <FilmRow
          key={i}
          listing={film}
          title={film.title}
          year={film.release_date}
          posterPath={film.poster_path}
          onFilmClick={onFilmClick}
          onFaveToggle={onFaveToggle}
          isFave={isFave}
        />
      </div>
    ));
    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div
            className={`film-list-filter ${
              this.state.filter === "all" ? "is-active" : ""
            }`}
            onClick={() => handleFilterClick("all")}
          >
            ALL
            <span className="section-count">{listings.length}</span>
          </div>
          <div
            className={`film-list-filter ${
              this.state.filter === "faves" ? "is-active" : ""
            }`}
            onClick={() => handleFilterClick("faves")}
          >
            FAVES
            <span className="section-count">0</span>
          </div>
        </div>
        {filmElements}
      </div>
    );
  }
}

export default FilmListing;
