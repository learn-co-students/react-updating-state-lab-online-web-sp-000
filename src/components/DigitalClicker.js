// Code DigitalClicker Component Here
import React, {Component} from 'react'

export default class DigitalClicker extends Component {
  constructor(){
    super()
    this.state = {
      timesClicked: 0
    }
  }

  handleClick = (e) => {
    let count = this.state.timesClicked + 1
    let updatedState = {...this.state, timesClicked: count};
    return this.setState(updatedState)
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.timesClicked}
      </button>
    )
  }
}
