// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component {

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

    adjustBitrate = () => this.adjustSettings({bitrate: 12})

    adjustResolution = () => this.adjustSettings({video: {resolution: '720p'}})

    adjustSettings = (newSetting) => {
        console.log(this.state)
        this.setState({
            settings: {
                ...this.state.settings, 
                ...newSetting
            }
        }, () => console.log(this.state))
    }

    render() {
        return (
            <div>
            <button onClick={this.adjustBitrate} className='bitrate'>Bitrate</button>
            <button onClick={this.adjustResolution} className='resolution'>Resolution</button>
            </div>
        )
    }
}