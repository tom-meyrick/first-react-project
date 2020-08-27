// Create a component <GodCounter /> that when you click anywhere in the browser window increments a counter by 1. Make sure that you remove the event handler in componentWillUnmount!

import React, { Component } from "react";

class GodCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener("click", this.handleClick);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.handleClick);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return <p onClick={this.handleClick}>{this.state.count}</p>;
  }
}

export default GodCounter;
