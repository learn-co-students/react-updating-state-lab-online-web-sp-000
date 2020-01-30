// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Components {
    constructor() {
    super()

   this.state = {
        timesClicked: 0,
    }
}

    handleClick = () => {
        this.setState(prevState => ({
            thisClicked: prevState.timesClicked+1
        }))
}

render() {
    return(
        <button onClick={this.handleClick}> {this.state.timesClicked}</button>
    )
}
}
export default DigitalClicker