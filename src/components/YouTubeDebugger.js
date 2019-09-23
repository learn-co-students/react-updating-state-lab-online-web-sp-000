// Code YouTubeDebugger Component Here
import React from 'react';


export default class YouTubeDebugger extends React.Component {
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

    handleBitrateClick = (e) => {
        this.setState({
            settings: {...this.state.settings, bitrate: 12}
        })
    }

    handleResolutionClick = (e) => {
        this.setState({
            settings: {...this.state.settings, video:{resolution: '720p'}}
        })
    }

    render(){
        return (
            <React.Fragment> 
                <button className="bitrate" onClick={this.handleBitrateClick}>{this.state.settings.bitrate}</button>
                <button className="resolution" onClick={this.handleResolutionClick}>{this.state.settings.video.resolution}</button>
            </React.Fragment>
        )
    }
}