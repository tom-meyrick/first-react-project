import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <ul className="list-group">
        <li className="list-group-item">
          <Link to="/">Home</Link>
        </li>
        <li className="list-group-item">
          <Link to="/first">First</Link>
        </li>
        <li className="list-group-item">
          <Link to="/second">Second</Link>
        </li>
        <li className="list-group-item">
          <Link to="/third">Third</Link>
        </li>
      </ul>
    );
  }
}

export default Footer;
