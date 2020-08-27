// Create a <List> component that consists of a <ul>, an <input>, and a <button>Add</button>. When you click the "Add" button, whatever is in the <input> should get added to the <ul>.

//Enter text in input 
//Click button - set state to be e.current.value
//ul takes val from state
//returns val as list item

import React, { Component } from 'react';

class List extends Component
{
    constructor(props) {
        super(props);
        this.state = { todo: "", list: [] }; 
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({ todo: e.currentTarget.value });
    }     

    handleClick(e) {
        e.preventDefault();
        this.setState({ todo: "", list: [...this.state.list, this.state.todo] }); 
    }

    render() {
    const{todo, list} = this.state;
    return (
    <div className="form-group">
    <ul>{list.map((todo, index) => (
        <li key={index}>{todo}</li>
    ))}</ul>
    <form> 
    <input type="text" className="form-control" placeholder="Add todo" value={todo} onChange={this.handleChange}></input>
    <button onClick={this.handleClick}>Add</button>
    </form>
    </div>
    );
    }
}

export default List;