import React, { Component } from 'react'

export default class DigitalClicker extends Component {

    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }

    handleButton = () => {
        this.setState(ps => {
            return {
                timesClicked: ps.timesClicked+1
            }
        })
    }

    render() {
        return(
            <button onClick={this.handleButton}>{this.state.timesClicked}</button>
        )
    }
}
