// Code DigitalClicker Component Here
import React, {Component} from 'react';

class DigitalClicker extends Component {

    constructor(){
        super();
        this.state = {
            timesClicked: 0
        }
    }

    handleClick = () => {
        let newState = this.state.timesClicked + 1

        this.setState({
            timesClicked: newState
        }, () => console.log(this.state.timesClicked))
    };

    render () {
        return (
            <button onClick = {this.handleClick} >{this.state.timesClicked}</button>
        )
    }
}

export default DigitalClicker