// Create an <Adder> component. It should have a number <input> field and an "Add" <button>. When the "Add" button is pressed the number should be added to a list of numbers on screen and the total of all the numbers in the list should be displayed below. Make sure you test the total is correct: try 1, 2, and 3 and check you get 6

//Add numbers in array together

import React, { Component } from 'react';

class Adder extends Component
{
    constructor(props) {
        super(props);
        this.state = { number: 0, list: [] }; 
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({ number: e.currentTarget.value });
    }     

    handleClick(e) {
        e.preventDefault();
        this.setState({ number: 0, list: [...this.state.list, this.state.number] }); 
    }

    render() {
    const{number, list} = this.state;
    return (
    <div className="form-group">
        <ul>{list.map((number, index) => (
            <li key={index}>{number}</li>
        ))}</ul>
    <form> 
    <input type="number" className="form-control" placeholder="Add" value={ number } onChange={ this.handleChange }></input>
    <button onClick={this.handleClick}>Add</button>
    </form>
        <p>{list.reduce((acc, num) => (
            +acc + +num
        ),0)}</p>
    </div>
        );
    }
}

export default Adder;