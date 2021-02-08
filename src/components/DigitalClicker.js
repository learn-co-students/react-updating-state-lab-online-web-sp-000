// Code DigitalClicker Component Here
import React, { Component } from 'react';

class DigitalClicker extends Component {

    constructor() {
      super();
   
      // Define the initial state:
      this.state = {
        timesClicked: 0
      };
    }
   
    // This is the first way
    // handleClick = () => {
    //     const newCount = this.state.timesClicked + 1
    //     this.setState({
    //         timesClicked: newCount
    //     })
    // }

    // This is the other way
    handleClick = () => {
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        })
    }
   
    render() {
      return (
        <div>
          <button onClick={this.handleClick}>{this.state.timesClicked}</button>
        </div>
      );
    }
  }

  export default DigitalClicker
   