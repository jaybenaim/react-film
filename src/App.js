import React, { Component } from "react";
import "./App.css";
import FilmListing from "./FilmListing";
import FilmDetails from "./FilmDetails";
import TMDB from "./TMDB";


class App extends Component {
  filmListingTitles = [];
  initialListings = TMDB["films"].map(film => {
    this.filmListingTitles.push(film.title);
    return film;
  });
  state = {
    listings: this.initialListings,
    title: [],
    current: {}
  };
  constructor(props) {
    super(props);
    this.setCurrent = this.setCurrent.bind(this);
  }
  setCurrent(film) {
    this.setState({ current: film });
  }

  componentDidUpdate() {
    console.log(this.state);
  }
  render() {
    return (
      <div className="film-library">
        <div className="film-list">
          <h1 className="section-title">FILMS</h1>
          <FilmListing
            listings={this.state.listings}
            title={this.state.title}
            onFilmClick={this.setCurrent}
          />
        </div>

        <div className="film-details">
          <h1 className="section-title">DETAILS</h1>
          <FilmDetails listings={this.state.listings} />
        </div>
      </div>
    );
  }
}

export default App;
