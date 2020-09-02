import React, {Component} from 'react'

class DigitalClicker extends Component {
    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }
    handleClick = () => {
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Click below! Go for 10,000 CLICKS! WIN THE GOLD! GO TO STATE! YOLO!</h1>
                <button onClick={this.handleClick}>{this.state.timesClicked}</button>
            </div>
        )
    }
}

export default DigitalClicker;