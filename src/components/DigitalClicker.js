import React, { Component } from 'react'

export default class DigitalClicker extends Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0
    }
  }

  clickHandler = () => {
    this.setState({
      timesClicked: parseInt(this.state.timesClicked, 10) + 1
    })
  }

  render() {
    return(
        <button id='button' onClick={() => this.clickHandler()}>
          <label>{this.state.timesClicked}</label>
        </button>
    )
  }
}