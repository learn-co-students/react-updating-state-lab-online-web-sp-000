// Code DigitalClicker Component Here

import React, {Component} from 'react';

class DigitalClicker extends Component {
  constructor() {
    super()
    // initial state has count set at 0
    this.state = {
      timesClicked: 0
    }
  }

  handleClick = () => {
    // when handleClick is called, newCount is set to whatever this.state.count is plus 1 PRIOR to calling this.setState
    this.setState(prevState => ({
    timesClicked: prevState.timesClicked+1
  }))
  }

  render() {
      return (
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      );
    }
}

export default DigitalClicker
