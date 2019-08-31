import React, { Component } from "react";
import "./App.css";
import FilmListing from "./FilmListing";
import FilmDetails from "./FilmDetails";
import TMDB from "./TMDB";
import FilmRow from "./FilmRow";
class App extends Component {
  filmListingTitles = [];
  initialListings = TMDB["films"].map(film => {
    this.filmListingTitles.push(film.title);
    return film;
  });
  state = {
    listings: this.initialListings,
    title: []
  };

  componentDidMount() {
    this.setState({
      listings: this.initialListings,
      title: this.filmListingTitles
    });
  }

  render() {
    return (
      <div className="film-library">
        <div className="film-list">
          <h1 className="section-title">FILMS</h1>
          <FilmListing
            listings={this.state.listings}
            title={this.state.title}
          />
        </div>

        <div className="film-details">
          <h1 className="section-title">DETAILS</h1>
          <FilmDetails />
        </div>
      </div>
    );
  }
}

export default App;
