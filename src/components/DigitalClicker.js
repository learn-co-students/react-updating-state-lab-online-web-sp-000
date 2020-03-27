import React from 'react'

class DigitalClicker extends React.Component {

    constructor() {
        super()
        this.state = {timesClicked: 0}
    }

    clickUpdate = () => {
        this.setState(prevState => ({
            timesClicked: prevState.timesClicked + 1
        }))
    }

    render() {
        return(
        <button onClick={this.clickUpdate}>{this.state.timesClicked}</button>
        )
    }
}

export default DigitalClicker
