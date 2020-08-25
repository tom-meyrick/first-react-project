// Create a <Counter initial={ 50 } max={ 100 } /> component. It should consist of a <p> containing a number (which starts at the initial value) and two buttons, + and -. When the user clicks the + button, the number should go up. When the user clicks the - button the number should go down. The number should not be able to go below 0. Use props to pass in a maximum value for the counter.

import React, { Component } from 'react';

class Counter extends Component
{
    constructor(props) {
        super(props); 
        this.state = { counter: this.props.initial }; 
        this.plus = this.plus.bind(this); 
        this.minus = this.minus.bind(this); 
    }

    plus() {
        if(this.state.counter < this.props.max) {
            this.setState({ counter: this.state.counter + 1 });
        }
    }

    minus() {
        if(this.state.counter > 0) {
            this.setState({ counter: this.state.counter - 1 });
        }
    }
    
    render() {
    return (
        <>
        <p>{this.state.counter}</p>
        <button onClick={this.plus}>+</button>
        <button onClick={this.minus}>-</button>
        </>
    );
    }
}

export default Counter;