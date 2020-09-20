// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {
    constructor() {
        super();

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

    handleBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
    
        })
    }



    handleResolution = () => {
    this.setState({
        settings: {
            ...this.state.settings,
            video: {
                // because video is within nested object I need to go another layer deep
                ...this.state.settings.video,
                resolution: '720p'
            }
        }
    })
}


    render() {
        return (
            <div>
                <button onClick={this.handleBitrate} className="bitrate">Bitrate Settings</button>
                <button onClick={this.handleResolution} className="resolution">Video Resolution</button>
            </div>
        )
    }
}
