// Code DigitalClicker Component Here
import React from 'react'

export default class DigitalClicker extends React.Component {
    constructor(){
        super();
        this.state = {
            timesClicked: 0
        };
    }
    clickHandler = () => this.setState((prevState) => {timesClicked: prevState.timesClicked+1})
    render = () => <button onClick={this.clickHandler}>{this.state.timesClicked}</button>
}