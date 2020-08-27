import React, { Component } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";

// Using only React Bootstrap components (there shouldn't be any HTML elements), create a <Progress> component. It should have a progress bar and a "More!" button. The progress bar should start at 0. Each time the button is pressed it should move 10% further along until it reaches 100%. Once it reaches 100% the button should become disabled.

class Progress extends Component {
  constructor(props) {
    super(props);
    this.state = { progress: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ progress: this.state.progress + 10 });
  }

  render() {
    const { progress } = this.state;
    return (
      <>
        <ProgressBar now={progress} label={`${progress}%`} />
        <Button
          variant="primary"
          onClick={this.handleClick}
          disabled={progress === 100}
        >
          More
        </Button>
      </>
    );
  }
}

export default Progress;
