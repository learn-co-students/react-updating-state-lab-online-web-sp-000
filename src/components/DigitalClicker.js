// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {
  constructor() {
    super();
    // Define the initial state
    this.state = {
      timesClicked: 0
    }
  }
  handleClicked = () => {
    let newCount = this.state.timesClicked + 1
    this.setState({
      timesClicked: newCount
    })
  }

  render() {
    return(
      <div>
      <button onClick={this.handleClicked}>{this.state.timesClicked}</button>
      </div>
    )
  }
}

export default DigitalClicker;
