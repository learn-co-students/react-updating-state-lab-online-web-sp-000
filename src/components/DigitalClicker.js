// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {
    constructor() {
        super();

        this.state = {
            timesClicked: 0 // sets state to 0
        };
    }

    handleClick = () => {
        this.setState(prevState => {
            return {timesClicked: prevState.timesClicked + 1} //increases previous state by one
        })
    }

    render() {
        return (
            <button onClick={this.handleClick}>{this.state.timesClicked}</button> //when clicked, call handleClick and show the number from timesClicked
        )
    }
}

export default DigitalClicker;