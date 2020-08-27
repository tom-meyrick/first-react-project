// Create a <TempConverter> component. It should have a °F and °C <input>. When you type a number into one <input> it should update the value in the other.

import React, { Component } from "react";

class PasswordStrength extends Component {
  constructor(props) {
    super(props);
    this.state = { fahrenheit: 0, celsius: 0 };
    this.handleF = this.handleF.bind(this);
    this.handleC = this.handleC.bind(this);
  }

  handleF(e) {
    this.setState({
      fahrenheit: e.currentTarget.value,
      celsius: ((+e.currentTarget.value - 32) * 5) / 9,
    });
  }

  handleC(e) {
    this.setState({
      celsius: e.currentTarget.value,
      fahrenheit: (+e.currentTarget.value * 9) / 5 + 32,
    });
  }

  render() {
    let { fahrenheit, celsius } = this.state;
    return (
      <div className="form-group">
        <label for="fahrenheit">Fahrenheit</label>
        <input
          className="form-control"
          type="number"
          value={fahrenheit}
          onChange={this.handleF}
          name="fahrenheit"
        ></input>
        <label for="celsius">Celsius</label>
        <input
          className="form-control"
          type="number"
          value={celsius}
          onChange={this.handleC}
          name="celsius"
        ></input>
      </div>
    );
  }
}

export default PasswordStrength;
