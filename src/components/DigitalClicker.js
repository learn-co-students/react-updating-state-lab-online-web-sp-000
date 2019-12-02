import React, { Component } from "react";

export default class DigitalClicker extends Component {
  state = {
    timesClicked: 0
  };
  handleClick = () => {
    this.setState(prev => ({
      timesClicked: prev.timesClicked + 1
    }));
  };
  render() {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    );
  }
}
