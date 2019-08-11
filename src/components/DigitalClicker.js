import React, {Component} from 'react';

export default class DigitalClicker extends Component {
  constructor(props){
    super(props)
    this.state = {timesClicked: 0}
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.setState( (st) => {
      return {timesClicked: st.timesClicked + 1};
   });
  }
  render(){
    return(<button onClick={this.handleClick}>{this.state.timesClicked}</button>)
  }
}
