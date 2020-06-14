import React, {Component} from 'react';

export default class DigitalClicker extends Component {
    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }

    handleEvent = () => {
        this.setState(lastState => {
            return {timesClicked: lastState.timesClicked + 1}
        })
    }

    render() {
        return (
            <button 
            onClick={this.handleEvent}>
            {this.state.timesClicked}
            </button>
        )
    }
}