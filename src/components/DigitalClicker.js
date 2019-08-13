// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component {

    constructor() {
        super();

        this.state = {
            timesClicked: 0
        }
    }

    handleClick = () => {
        this.setState(previous => ({
            timesClicked: previous.timesClicked +1
        }))
    }

    render() {
        return (
            <div>
                <p>I have been clicked {this.state.timesClicked} times!</p>
                <button onClick={this.handleClick}>{this.state.timesClicked}</button>
            </div>
        )
    }
}

export default DigitalClicker