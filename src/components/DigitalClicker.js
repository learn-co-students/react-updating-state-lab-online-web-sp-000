// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component {
    state = {
        timesClicked: 0
    }

    updateClicks = () => {
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        })
    }

    render() {
        return (
            <button onClick={this.updateClicks} >{this.state.timesClicked}</button>
        )
    }
}
export default DigitalClicker