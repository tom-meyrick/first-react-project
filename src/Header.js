import React, { Component } from "react";

class Header extends Component {
  render() {
    const { children } = this.props;
    return (
      <header className="jumbotron">
        <h1>Hello {children}</h1>
      </header>
    );
  }
}

export default Header;
