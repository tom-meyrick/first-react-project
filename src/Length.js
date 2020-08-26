// Create a <Length> component. It should contain an <input> and tell you how many characters have been typed into the <input>.

import React, { Component } from 'react';

class Length extends Component
{
    constructor(props) {
        super(props);
        this.state = { input: "" }; 
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ input: e.currentTarget.value });
    }

    render() {
    return (
    <div className="form-group">
    <input className="text" value={this.state.input} onChange={this.handleChange}></input>
    <p>{this.state.input.length}</p>
    </div>
    );
    }
}

export default Length;