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
    e.stopPropagation();
    this.setState({ isFave: !this.state.isFave });
    // if (this.state.isFave === false) this.setState({ isFave: true });
    // else this.setState({ isFave: false });
    console.log(this.state);
  };
  render() {
    const isFave = this.state.isFave ? "remove_from_queue" : "add_to_queue";
    const faveClassName = `film-row-fave ${isFave}`;
    return (
      <div className={faveClassName} onClick={this.handleFave}>
        <p className="material-icons">add_to_queue</p>
      </div>
    );
  }
}

export default Fave;
