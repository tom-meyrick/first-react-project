// Using only React Bootstrap components (there shouldn't be any HTML elements), create a <CatchMeIfYouCan jump={ 100 }> component. It should have a button that when clicked moves jump pixels down the screen.

import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class CatchMeIfYouCan extends Component {
  constructor(props) {
    super(props);
    this.state = { position: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ position: this.state.position + this.props.jump });
  }

  render() {
    let placement = this.state.position;
    return (
      <Button
        variant="warning"
        onClick={this.handleClick}
        style={{ marginTop: placement }}
      >
        Jump
      </Button>
    );
  }
}

export default CatchMeIfYouCan;
