// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalClicker extends Component {
    constructor() {
        super();
// timesClicked is set to '0'
        this.state = {
            timesClicked: 0,
        };
    }

handleClick = () => {
    // previousState is a function referred to as previous state and be passed 
    // the component state from when that setState was called.  Meaning 
    // that this.state is '0' and when called in setstate its still at '0' 
   this.setState(previousState => {
       return {
           timesClicked: previousState.timesClicked+1
       }
   })
}

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>{this.state.timesClicked}</button>
            </div>
        )
    }
}
