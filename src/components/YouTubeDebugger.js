// Code YouTubeDebugger Component Here

import React from 'react'

export default class YouTubeDebugger extends React.Component {

    constructor() {
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

    handleBitrate = (event) => {
        this.setState({
            errors: [],
            user: null,
            settings: {
                ...this.state.settings, 
                bitrate: 12
            }
        })
    }

    handleResolution = (event) => {
        this.setState({
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
            video: {
                ...this.state.settings.video, 
                resolution: '720p'
            }  
        }      
        })
    }

    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.handleBitrate}>

                </button>

                <button className="resolution" onClick={this.handleResolution}>

                </button>

            </div>
        )
    }
}