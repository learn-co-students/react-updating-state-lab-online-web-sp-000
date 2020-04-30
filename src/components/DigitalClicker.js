import React, { Component } from 'react';

export default class DigitalClicker extends Component {

    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }

    handleClick = () => {
        let newTimesClicked = this.state.timesClicked + 1
        this.setState({
            timesClicked: newTimesClicked
        })
    }

    render() {
        return (
            <button label={this.state.timesClicked} onClick={this.handleClick}>{this.state.timesClicked}</button>
        )
    }
}
