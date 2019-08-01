import React from 'react'

export default class DigitalClicker extends React.Component {
    constructor(){
        super()
        this.state = {
            timesClicked: 0
        }
    }

    clickHandler = () => {
        let clickCounter = this.state.timesClicked 
        this.setState({timesClicked: ++ clickCounter 
        })
    }

    render(){
      return(  <button onClick={this.clickHandler}>{this.state.timesClicked}</button> 
      )}
}
