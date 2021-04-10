import React from 'react'

class DigitalClicker extends React.Component {
    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }

    onClickEvent = () => {
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            } 
        })
    }   

    render () {
        return (
            <button onClick={this.onClickEvent}>
                <label>{`${this.state.timesClicked}`}</label>
            </button>
        )
    }
}

export default DigitalClicker
