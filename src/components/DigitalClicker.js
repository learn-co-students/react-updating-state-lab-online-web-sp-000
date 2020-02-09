// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component {

    constructor() {
        super(); 
        this.state = {
            timesClicked: 0
        };
    }

    handleClick = () => {
        //let newTimesClicked = this.state.timesClicked + 1
        this.setState( previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        })
    } 

    render(){
        return(
            <div>
            <button onclick={this.handleClick}>{this.state.timesClicked}</button>
            </div>
        )
    }
    
}