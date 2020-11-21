// Code DigitalClicker Component Here
import React, { Component } from 'react';

export default class CLASSNAME extends Component {

  constructor(props) {
    super()
    this.state = {
      timesClicked: 0
    }
  }  

  handleClick = (event) => {
      console.log(this.state.timesClicked)
      this.setState({timesClicked: this.state.timesClicked+1})
  }

  render() {
    return (
        <button
        onClick={this.handleClick}
        >{this.state.timesClicked}</button>
    )
  }
  
}