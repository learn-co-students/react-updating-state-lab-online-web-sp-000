// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalClicker extends Component {

    constructor() {
        super();

        this.state = {
            timesClicked: 0 //initial state property defined as 0, component renders out a button w a label that shows time clicked value
        };
    }

    //increments by one everytime button is clicked. state is being updated.
    handleClick = () => {
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        });
    }

    render() {
        return (
            <button onClick={this.handleClick}>{this.state.timesClicked}</button>
        )
    }
}