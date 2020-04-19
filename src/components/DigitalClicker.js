// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {
  constructor(){
    super()
    this.state = {
      timesClicked: 0
    }
  }

  increment = () => {
    const newClicks = this.state.timesClicked + 1
    this.setState(
      {timesClicked: newClicks}
    )
  }
  render() {
    return (
      <button onClick={this.increment}>{this.state.timesClicked}</button>
    )
  }
}
