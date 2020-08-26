// Create a <PasswordStrength> component. It should contain an <input> with the type password. The background styling should change depending on the length of the password:

// If it's empty the background shouldn't have styling.
// If it's less than 9 it should be red.
// If it's less than 16 it should be orange.
// If it's 16 or more then it should be green.

import React, { Component } from 'react';

class PasswordStrength extends Component
{
    constructor(props) {
        super(props);
        this.state = { input: "" }; 
        this.handleChange = this.handleChange.bind(this);
        this.handleColor = this.handleColor.bind(this);
    }

    handleChange(e) {
        this.setState({ input: e.currentTarget.value });
    }

    handleColor(length) {
        let color; 
        if(length > 0 && length <= 9) {
            color = "red"; 
        } else if(length > 9 && length <= 16) {
            color = "orange"; 
        } else if(length > 16) {
            color = "green"; 
        }
        return color;
    }

    render() {
    let { input } = this.state;
    let color = this.handleColor(input.length); 
    return (
    <div className="form-group" style={{background: color}}>
    <input className="text" type="password" value={input} onChange={this.handleChange}></input>
    <p>{input.length}</p>
    </div>
    );
    }
}

export default PasswordStrength;