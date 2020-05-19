import React, { Component } from 'react';

export class DigitalClicker extends Component {
   constructor(props) {
       super(props);
       this.state = {
        timesClicked: 0
       }
   }

   handleClick = (event) => {
    const newCount = this.state.timesClicked + 1
    this.setState({
       timesClicked: newCount 
    })
 }

 render() {
    return (
       <div>
       Times Clicked: <button onClick={this.handleClick}>{this.state.timesClicked}</button>
       </div>
    );
 }
}

    export default DigitalClicker;
