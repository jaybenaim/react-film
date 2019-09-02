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
    this.props.onFaveToggle();
    this.setState({ isFave: !this.state.isFave });

    // this.state.isFave
    //   ? this.setState({ isFave: false })
    //   : this.setState({ isFave: true });
    console.log(this.state);
  };
  render() {
    const isFave = this.state.isFave ? "remove_from_queue" : "add_to_queue";
    const faveClassName = `film-row-fave ${isFave}`;

    return (
      <div onClick={this.handleFave}>
        <div
          className={faveClassName}
          onClick={() => this.props.onFaveToggle(this.props.listing)}
        >
          <p className="material-icons">add_to_queue</p>
        </div>
      </div>
    );
  }
}

export default Fave;
