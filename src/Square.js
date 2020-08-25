// Update your <Square colour="hotpink"> component so that the background starts green, but when it is clicked it changes to the passed in colour. It should alternate every time you click.

import React, { Component } from 'react';

class Square extends Component
{
    constructor(props) {
        super(props); 
        this.state = { isGreen: true }; 
        this.handleClick = this.handleClick.bind(this); 
    }

    handleClick() { 
        this.setState({ isGreen: !this.state.isGreen });
    }

    render() {
    let changedColor = this.state.isGreen ? "green" : this.props.color;
    return (
       <figure>
       <div 
       onClick={this.handleClick} 
       style={{background: changedColor, width: 200, height: 200}}
       >
       </div>
       </figure>
    );
    }
}

Square.defaultProps = {
    color: "green"
};

export default Square;
