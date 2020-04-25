// Code DigitalClicker Component Here
import React, {Component} from 'react'

export default class DigitalClicker extends Component {
    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }

    clickHandler = () => {
        this.setState({
            timesClicked: this.state.timesClicked + 1
        })
    }

    render(){
        return(
            <button onClick={this.clickHandler}>{this.state.timesClicked}</button>
        )
    }
}