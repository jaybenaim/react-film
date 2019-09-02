import React, { Component } from "react";
class Fave extends Component {
  constructor(props) {
    super(props);
    this.handleFave = this.handleFave.bind(this);
  }

  state = {
    isFave: false
  };
  handleFave = e => {
    this.props.onFaveToggle(this.props.listing);
    this.setState({ isFave: !this.state.isFave });
    console.log(this.state);
  };
  render() {
    const isFave = this.state.isFave ? "remove_from_queue" : "add_to_queue";
    const faveClassName = `film-row-fave ${isFave}`;
    console.log(isFave);
    return (
      // <div onClick={this.handleFave}>
      <div className={faveClassName} onClick={() => this.handleFave()}>
        <p className="material-icons">add_to_queue</p>
      </div>
      // </div>
    );
  }
}

export default Fave;
