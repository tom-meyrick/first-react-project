// Add the necessary code so that you can increment both of the counters.

// Use componentDidMount and componentDidUpdate to update the document.title property so that the page title is always the value of both values added together (e.g. when the component loads it should be 2, after the first click it should change to 3)

import React, { Component } from 'react';

class TwoCounters extends Component
{
    constructor(props) {
        super(props); 
        this.state = { value1: 1, value2 : 1 }; 
        this.handle1 = this.handle1.bind(this);
        this.handle2 = this.handle2.bind(this); 
    }

    componentDidMount() {
        document.title = this.state.value1 + this.state.value2;
    }

    componentDidUpdate() {
        document.title = this.state.value1 + this.state.value2;
    }

    handle1() {
        this.setState({ value1: this.state.value1 + 1 })
    }

    handle2() {
        this.setState({ value2: this.state.value2 + 1 })
    }

    render() {
    let value1 = this.state.value1; 
    let value2 = this.state.value2;
    return (
    <div className="jumbotron">
        <p>
            <button onClick={ this.handle1 } className="btn btn-lg btn-danger">+</button>
            <span className="alert alert-danger mr-2 ml-2">{ value1 }</span>
        </p>
        <p>
            <button onClick={ this.handle2 } className="btn btn-lg btn-success">+</button>
            <span className="alert alert-success mr-2 ml-2">{ value2 }</span>
        </p>
    </div>
    );
    }
}

export default TwoCounters;