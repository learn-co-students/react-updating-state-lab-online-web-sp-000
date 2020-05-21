// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {
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
                    resolution: '720p'
                }
            }
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.settings.bitrate}</h2>
                <button className="bitrate" onClick={this.handleBitrate}>
                    Change bitrate to 12
                </button>

                <h2>{this.state.settings.video.resolution}</h2>
                <button className="resolution" onClick={this.handleResolution}>
                    Change resolution to 720p
                </button>
            </div>
        )
    }
}
