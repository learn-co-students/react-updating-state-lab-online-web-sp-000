// Code DigitalClicker Component Here
import React from 'react'

export default class DigitalClicker extends React.Component {

    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }

    handleClick = (event) => {
        let time = this.state.timesClicked
        this.setState({timesClicked: time + 1})
    }

    render() {
        return (
            <button
            onClick={this.handleClick}>
                {this.state.timesClicked}
            </button>   
        )
    }
}