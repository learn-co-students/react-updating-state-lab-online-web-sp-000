// Code DigitalClicker Component Here

import React from 'react';
 
class DigitalClicker extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
        timesClicked: 0

    };
  }
 
  handleClick = () => {
    // Update our state here...
    this.setState(previousState=>{
        return {
            timesClicked: previousState.timesClicked + 1
        }
    } 

    )
  };
 
  render() {
    return (
     <button onClick ={this.handleClick}>{this.state.timesClicked}</button>
    );
  }
}
 
export default DigitalClicker;
