import React, { Component } from "react";
import "./App.css";
import FilmListing from "./FilmListing";
import FilmDetails from "./FilmDetails";
import TMDB from "./TMDB";

class App extends Component {
  constructor(props) {
    super(props);
    this.setCurrent = this.setCurrent.bind(this);
  }
  filmListingTitles = [];
  initialListings = TMDB["films"].map(film => {
    this.filmListingTitles.push(film.title);
    return film;
  });
  state = {
    listings: this.initialListings,
    title: [],
    current: {},
    faves: [],
    newFaves: []
  };

  setCurrent(film) {
    this.setState({ current: film });
  }
  handleFaveToggle = film => {
    const filmIndex = Array.prototype.indexOf();
    this.state.newFaves.push(film.title);
    this.setState({ faves: this.state.newFaves });
  };
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
            faves={this.state.faves}
            onFaveToggle={this.handleFaveToggle}
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
