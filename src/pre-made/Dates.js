import React, { Component } from "react";
import DatePicker from "react-datepicker";
import Alert from "react-bootstrap/Alert";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

class Dates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstDate: new Date(),
      secondDate: new Date(),
    };
    this.handleChangeOne = this.handleChangeOne.bind(this);
    this.handleChangeTwo = this.handleChangeTwo.bind(this);
  }

  handleChangeOne = (date) => {
    this.setState({
      firstDate: date,
    });
  };

  handleChangeTwo = (date) => {
    this.setState({
      secondDate: date,
    });
  };

  calculateDays(firstDate, secondDate) {
    firstDate = moment(firstDate);
    secondDate = moment(secondDate);
    return secondDate.diff(firstDate, "days");
  }

  render() {
    const { firstDate, secondDate, days } = this.state;
    const daysBetween = this.calculateDays(firstDate, secondDate);
    return (
      <>
        <DatePicker
          selected={this.state.firstDate}
          onChange={this.handleChangeOne}
        />
        <DatePicker
          selected={this.state.secondDate}
          onChange={this.handleChangeTwo}
        />
        <Alert variant="primary">{`${daysBetween} days`}</Alert>
      </>
    );
  }
}

export default Dates;
