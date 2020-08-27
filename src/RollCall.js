// Create a <RollCall names={ names }> component. It should have a button "Next". When the component first loads it should show the first name in the array. Every time you click "Next" it should show the next name in the array. It should loop back to the beginning.

import React, { Component } from "react";

class RollCall extends Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      currentIndex: (this.state.currentIndex + 1) % this.props.names.length,
    });
  }

  render() {
    return (
      <>
        <p>{this.props.names[this.state.currentIndex]}</p>
        <button onClick={this.handleClick}>Next</button>
      </>
    );
  }
}

export default RollCall;
