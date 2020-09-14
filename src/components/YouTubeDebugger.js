// Code YouTubeDebugger Component Here
import React, {Component} from 'react'

export default class YouTubeDebugger extends Component{
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

    handleBitrate = (e) => {
        const newState = {...this.state}
        newState.settings.bitrate = 12
        this.setState({
            ...newState
        } )
        console.log(this.state)
    }
    handleResolution = (e) => {
        const newState = {...this.state}
        console.log()
        newState.settings.video.resolution = "720p"
        this.setState({
            ...newState
        } )
        console.log(this.state)
    }
    
    render(){
        return(
            <div>
            <button className="bitrate" onClick={this.handleBitrate}>{this.state.settings.bitrate}</button>
            <button className="resolution" onClick={this.handleResolution}>{this.state.settings.video.resolution}</button>
            </div>
        )
    }

}