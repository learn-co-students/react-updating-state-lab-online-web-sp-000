import React, { Component } from 'react';

export default class DigitalClicker extends Component {
    constructor() {
        super()
        this.state = {
            timesClicked: 0
        } 
    }
    click_counter = () => {
        const newTimesClicked = this.state.timesClicked + 1
        this.setState({
            timesClicked: newTimesClicked
        })
    }
    render() {
        return (
        <button onClick={this.click_counter}>{this.state.timesClicked}</button>
        )
    }

}
