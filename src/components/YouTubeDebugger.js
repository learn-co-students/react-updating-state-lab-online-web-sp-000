import React, { Component } from 'react'

export default class DigitalClicker extends Component{
    constructor(){
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }
    clickBitrate = () => {this.setState(previousState => {
        let settings = ({...previousState.settings, bitrate: 12})
        return({...previousState, settings})
    })}
    clickRes = () => {this.setState(previousState => {
        let video = ({...previousState.video, resolution: '720p'})
        let settings = ({...previousState.settings, video})
        return ({...previousState, settings})
    })}
    render(){
        return(
            <div>
                <button className = 'bitrate' onClick= {this.clickBitrate}>Bitrate</button>
                <button className= 'resolution' onClick= {this.clickRes}>Resolution</button>
            </div>
        )
    }
}