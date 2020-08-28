// Using only React Bootstrap components (there shouldn't be any HTML elements), create a <TempConverter> component. It should have a °F and °C input. When you type a number into one input it should update the value in the other.

import React, { Component } from "react";
import Form from "react-bootstrap/Form";

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
    const { fahrenheit, celsius } = this.state;
    return (
      <Form.Group>
        <Form.Label for="fahrenheit">Fahrenheit</Form.Label>
        <Form.Control
          className="form-control"
          type="number"
          value={fahrenheit}
          onChange={this.handleF}
          name="fahrenheit"
        />
        <Form.Label for="celsius">Celsius</Form.Label>
        <Form.Control
          className="form-control"
          type="number"
          value={celsius}
          onChange={this.handleC}
          name="celsius"
        />
      </Form.Group>
    );
  }
}

export default PasswordStrength;
