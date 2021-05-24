import React, { Component } from 'react'

export default class DigitalClicker extends Component {

  constructor() {
    super();
    this.state = {
      timesClicked: 0
    }
  }

  handleClick = () => {
    const prev = this.state.timesClicked
    this.setState({
      timesClicked: prev + 1
    })
  }

  getClicks = () => {
    return this.state.timesClicked === 0 ? 'Click Me' : this.state.timesClicked
  }

  render() {
    return (
      <button
        value={ this.state.timesClicked }
        onClick={ this.handleClick }
      >{this.getClicks()}</button>)
  }
}
