// Code DigitalClicker Component Here
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class DigitalClicker extends Component {
    constructor(){
        super();
        this.state = {
            timesClicked: 0
        }
    }

    handleClicked = () => {
        this.setState(previousState => {
           return { 
               timesClicked: previousState.timesClicked + 1
           }
        })
        console.log(this.previousState)
    }

    render() {
       return(
        <button onClick={this.handleClicked}>{this.state.timesClicked}</button>
       ) 
    }
}