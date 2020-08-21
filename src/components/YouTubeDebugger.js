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
    change_bitrate = () => {
        this.setState({
            settings: Object.assign({}, this.state.settings, {bitrate: 12})
        })
    }
    change_resolution = () => {
        this.setState({ 
            settings: {video: Object.assign({}, this.state.settings.video, {resolution: '720p'})}
        })
    }
    render() {
        return (
            <div><button className='bitrate' onClick={this.change_bitrate}>BITRATE</button>
            <button className='resolution' onClick={this.change_resolution}>RESOLUTION</button></div>
        )
    }
}