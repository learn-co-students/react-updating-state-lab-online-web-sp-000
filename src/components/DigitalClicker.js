import React, { Component } from 'react'

export class DigitalClicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timesClicked: 0
    }
  }

  handleClick = () => {
    this.setState(previousState => {
      return {
        timesClicked: previousState.timesClicked + 1
      }
    })
  }

  render() {
    return (
      <button onClick={this.handleClick}><h1>{this.state.timesClicked}</h1></button>
    )
  }
}

export default DigitalClicker
