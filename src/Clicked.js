import React, { Component } from 'react';

class Clicked extends Component
{
    constructor(props) {
        super(props); 
        this.state = { clicked: false }; 
        this.handleClick = this.handleClick.bind(this); 
    }

    handleClick() {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
    return (
       <header onClick={this.handleClick} className="jumbotron">
           {this.state.clicked ? "Clicked" : "Not Clicked"}
       </header> 
    );
    }
}

export default Clicked;