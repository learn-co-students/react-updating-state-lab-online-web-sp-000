// Code DigitalClicker Component Here

import React, { Component } from 'react'

export default class DigitalClicker extends Component {
  constructor(){
    super()
    this.state = {
      timesClicked: 0
    }
  }

  updateClicked = () => {
    const newTimesClicked = this.state.timesClicked + 1
    this.setState({
      timesClicked: newTimesClicked
    })
  }

  render(){
    return (
      <button onClick={this.updateClicked}>{this.state.timesClicked}</button>
    )
  }
}
