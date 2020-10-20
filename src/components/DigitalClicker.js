// Code DigitalClicker Component Here
import React, { Component } from 'react';

export default class DigitalClicker extends Component {

  constructor(props) {
    super(props)
    this.state = {timesClicked:0}
  }



  handleClick = () => {
    let newCount = this.state.timesClicked + 1
    return this.setState({timesClicked:newCount});
  }

  render() {
    return (<button
      onClick = {
        this.handleClick}
      >{this.state.timesClicked}</button>)
  }

}
