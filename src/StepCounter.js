// Create a <StepCounter max={ 100 } step={ 5 } /> component. It should consist of a <p> containing a number (start at 0) and two buttons, + and -. When the user clicks the + button, the number should go up by step. When the user clicks the - button the number should go down by step. The number should not be able to go below 0. Use props to pass in a maximum value for the counter.

import React, { Component } from "react";

class StepCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.plus = this.plus.bind(this);
    this.minus = this.minus.bind(this);
  }

  plus() {
    if (this.state.counter < this.props.max) {
      this.setState({ counter: this.state.counter + this.props.step });
    }
  }

  minus() {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - this.props.step });
    }
  }

  render() {
    return (
      <>
        <p>{this.state.counter}</p>
        <button onClick={this.plus}>+</button>
        <button onClick={this.minus}>-</button>
      </>
    );
  }
}

export default StepCounter;
