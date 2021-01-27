import React, {Component} from 'react'

export default class DigitalClicker extends Component {
    constructor(timesClicked){
        super();
        this.state = {
            timesClicked: 0
        };
    }

    handleClick = () => {
        this.setState(lastState => ({
            timesClicked: lastState.timesClicked + 1
        }))
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>{this.state.timesClicked}</button>
            </div>
        )
    }
}

