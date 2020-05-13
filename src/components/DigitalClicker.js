// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component {

    constructor() {
        super();
        this.state = {
            timesClicked: 0
        }
    }

    handleClick = () => {
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        }, () => console.log(this.state.timesClicked))
    }

    render() {
        return (
            <button onClick={this.handleClick} label={this.state.timesClicked}>{this.state.timesClicked}</button>
        )
    }
}