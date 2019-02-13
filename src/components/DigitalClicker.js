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

    clickedHandle = () => {
      this.setState(prevState => ({
        timesClicked: prevState.timesClicked+1

      }))
    }

  render() {
  
    return (
      <div>
        <button onClick={this.clickedHandle}>{this.state.timesClicked}</button>
      </div>
    );
  }

}

export default DigitalClicker;
