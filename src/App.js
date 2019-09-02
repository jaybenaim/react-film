import React, { Component } from "react";
import "./App.css";
import FilmListing from "./FilmListing";
import FilmDetails from "./FilmDetails";
import TMDB from "./TMDB";

class App extends Component {
  constructor(props) {
    super(props);
    this.setCurrent = this.setCurrent.bind(this);
    // this.handleFaveToggle = this.handleFaveToggle.bind(this);
  }
  filmListingTitles = [];
  initialListings = TMDB["films"].map(film => {
    this.filmListingTitles.push(film.title);
    return film;
  });
  state = {
    listings: this.initialListings,
    newListings: [],
    title: [],
    current: {},
    faves: [],
    newFaves: []
  };

  setCurrent(film) {
    this.setState({ current: film });
  }
  handleFaveToggle = film => {
    const filmIndex = this.state.newFaves.indexOf(film);
    const isThere = this.state.newFaves.includes(film);
    console.log(film);
    isThere
      ? this.state.newFaves.pop(filmIndex)
      : this.state.newFaves.push(film);

    this.setState({ faves: this.state.newFaves });
  };
  handleFilterClick = filter => {
    filter === "all"
      ? this.state.newListings.push(this.state.listings)
      : this.setState({ newListings: this.state.newFaves });
  };
  render() {
    return (
      <div className="film-library">
        <div className="film-list">
          <h1 className="section-title">FILMS</h1>
          <FilmListing
            listings={this.state.listings}
            title={this.state.title}
            onFilmClick={this.setCurrent}
            faves={this.state.faves}
            onFaveToggle={this.handleFaveToggle}
            handleFilterClick={this.handleFilterClick}
            isFave={this.state.isFave}
          />
        </div>

        <div className="film-details">
          <h1 className="section-title">DETAILS</h1>
          <FilmDetails listings={this.state.faves} />
        </div>
      </div>
    );
  }
}

export default App;
