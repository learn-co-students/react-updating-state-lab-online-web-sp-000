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
        // when handleClick is called, newCount is set to whatever this.state.count is plus 1 PRIOR to calling this.setState
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
          })
          console.log(this.state.timesClicked)
      }
   
    render() {
      return (
        <div>
          <p>{this.state.timesClicked}</p>
          <button onClick={this.handleClick}>{this.state.timesClicked}</button>
        </div>
      );
    }
  }
   
  export default DigitalClicker;