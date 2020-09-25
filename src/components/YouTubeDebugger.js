// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {
    constructor() {
        super();

        //state properties 
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        };
    }

    //clicking button changes property to 12 
    handleBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    //clicking button changes state property to 720
    handleResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.video,
                    resolution: '720p'
                }
            }
        })
    }

    //bitrate button and resolution button
    render() {
        return (
            <div>
                <label>Bitrate</label>
                <button className='bitrate' onClick={this.handleBitrate}>{this.state.settings.bitrate}</button>
                <label>Resolution</label>
                <button className='resolution' onClick={this.handleResolution}>{this.state.settings.video.resolution}</button>
            </div>
        )
    }

}