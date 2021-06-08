// Code DigitalClicker Component Here
import React, { Component } from 'react';

export default class DigitalClicker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            timesClicked: 0
          
        } 
      }
      clickHandle = (e) =>{
        let timesClicked = this.state.timesClicked += 1
        this.setState({
            timesClicked: timesClicked
          });
    
      }


      render() {
        return (
          <div>
             <button onClick={this.clickHandle} >{this.state.timesClicked}</button>    
          </div>
        )
      }
      
}
