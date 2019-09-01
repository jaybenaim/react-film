import React, { Component } from "react";
class Fave extends Component {
  constructor(props) {
    super(props);
    this.handleFave = this.handleFave.bind(this);
  }

  handleFave = e => {
    e.stopPropagation();
    this.props.onFaveToggle();
    // if (this.state.isFave === false) this.setState({ isFave: true });
    // else this.setState({ isFave: false });
    console.log(this.state);
  };
  render() {
    const isFave = this.props.isFave ? "remove_from_queue" : "add_to_queue";
    const faveClassName = `film-row-fave ${isFave}`;
    return (
      <div
        className={isFave}
        onClick={() => this.props.onFaveToggle(this.props.listing)}
      >
        <p className="material-icons">add_to_queue</p>
      </div>
    );
  }
}

export default Fave;
