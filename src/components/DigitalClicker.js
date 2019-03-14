import React, { Component } from 'react';

export default class DigitalClicker extends Component {
  constructor() {
    super()
    this.state = {
      timesClicked: 0
    }
  }

  updateClicks = () => {
    let clicks = this.state.timesClicked + 1;
    this.setState({ timesClicked: clicks })
  }
  
  render() {
    return(
      <button onClick={this.updateClicks}>{this.state.timesClicked}</button>
    )
  }
}