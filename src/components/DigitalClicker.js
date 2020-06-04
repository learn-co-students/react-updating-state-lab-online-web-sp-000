// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0,
    }
  }

  handleClicker = ()=>{
    this.setState(prevState => ({
      timesClicked: prevState.timesClicked + 1
    }))
  }
  render() {
    return (
      <button onClick = {this.handleClicker}>{this.state.timesClicked}</button>
    );
  }
}
