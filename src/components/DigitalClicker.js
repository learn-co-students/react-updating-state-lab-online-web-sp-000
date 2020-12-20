import React, {Component} from 'react';

export default class DigitalClicker extends Component {
    constructor() {
        super();
        this.state = {
            timesClicked: 0
        }
    };

    addClick = () => {
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        })
    };

    render() {
        return (
            <div>
                <button id='click_button' onClick={this.addClick}>{`${this.state.timesClicked}`}</button>
            </div>
        )
    }

}