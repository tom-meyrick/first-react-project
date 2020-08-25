import React, { Component } from 'react';

class People extends Component
{
    render() {
    const{ names } = this.props;
    return (
        names ? (
        <ul onClick={() => console.log("Hello World")} className="list-group">
        { names.map((name, i) => (
            <li className="list-group-item" key={ i }>{ name }</li>
        )) }
        </ul>
        ) : <p>Nothing to see here</p>
    );
    }
}

export default People;