// Create a <CatchMeIfYouCan jump={ 100 }> component. It should have a <button> that when clicked moves jump pixels down the screen.

import React, { Component } from 'react';

class CatchMeIfYouCan extends Component
{
    constructor(props) {
        super(props); 
        this.state = { position: 0 }; 
        this.handleClick = this.handleClick.bind(this); 
    }

    handleClick() {
        this.setState({ position: this.state.position + this.props.jump})
    }
    
    render() {
    let placement = this.state.position; 
    return (
        <button onClick={this.handleClick} style={{marginTop: placement}}>Jump</button>
    );
    }
}

export default CatchMeIfYouCan;