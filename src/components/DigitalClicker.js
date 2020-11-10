import React, {Component} from 'react'

class DigitalClicker extends Component {

    constructor(props) {
        super()
        this.state = {
            timesClicked: 0
        }

        //this.handleClick = this.handleClick.bind(this)
    }

    // handleClick() {
    //     this.setState((previousState) => {
    //         return {
    //             timesClicked: previousState.timesClicked + 1
    //         }
    //     })
    // }

    handleClick = () => {
        this.setState((previousState) => {
            return { timesClicked: previousState.timesClicked + 1 }
        })
    }

    render() {
        return <button onClick={ this.handleClick }>{ this.state.timesClicked }</button>
    }
}

export default DigitalClicker