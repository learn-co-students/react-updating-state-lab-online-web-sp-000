import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {
    constructor(){
        super()

        this.state={
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

    clickHandlerBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    clickHandlerResolution = () => {
        console.log(this.state.settings.video.resolution)
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        },
                () => console.log(this.state.settings.video.resolution)
        )
    }
    
    render(){
        return(
            <div>
                <button onClick={this.clickHandlerBitrate} className="bitrate">Bitrate</button> 
                <button onClick={this.clickHandlerResolution} className="resolution">Resolution</button>
            </div>
        )
    }
}