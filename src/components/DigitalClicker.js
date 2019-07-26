// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      timesClicked: 0
    }
  }

  increment = () => {
    const plusOne = this.state.timesClicked + 1;
    this.setState({timesClicked: plusOne});
  }

  render(){
    return (
      <button onClick={this.increment}>{this.state.timesClicked}</button>
    );
  }
}