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
    this.setState(previousState => {
        return {
            timesClicked: previousState.timesClicked + 1
          }
    });
  }
 
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    );
  }
}
 
export default DigitalClicker;
/*


The component renders out a button with a label that shows the timesClicked value. This means that, at the start, your button should just say 0.

Whenever the button is clicked, update the state by incrementing the timesClicked by 1.

HINT: At the moment, src/index.js is trying to import DigitalClicker and the next component, YouTubeDebugger. To be able to see your progress as you build out DigitalClicker, you can comment out the second component by wrapping it in curly braces and comment indicators:
*/