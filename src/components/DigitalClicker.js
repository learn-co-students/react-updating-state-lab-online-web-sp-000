import React from 'react';

// Code DigitalClicker Component Here
class DigitalClicker extends React.Component {
    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }

    // our increment method makes use of the 'setState' method, which is what we use to alter state
    increment = () => {
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked += 1
            }
        })
    }


    render() {
        return <button onClick={this.increment}>{this.state.timesClicked}</button>
    }
}

export default DigitalClicker;