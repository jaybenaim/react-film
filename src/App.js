import React, { Component } from "react";
import "./App.css";
import FilmListing from "./FilmListing";
import FilmDetails from "./FilmDetails";
import TMDB from "./TMDB";
class App extends Component {
  state = {
    listings: this.initialListings,
    title: []
  };
  componentDidMount() {
    const initialListings = TMDB["films"];
    const filmListingTitles = initialListings.map(item => {
      return item.title;
    });
    this.setState({ title: filmListingTitles });
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
