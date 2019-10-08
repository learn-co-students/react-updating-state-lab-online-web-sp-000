// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
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
        };
    }

    handleBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        });
        console.log(this.state.settings.bitrate)
    }

    handleResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        });
        console.log(this.state.settings.video.resolution)
    }
    render() {
        return(
            <div>
                <button className='bitrate' onClick={this.handleBitrate}>Click me to change bitrate</button>
                <button className='resolution' onClick={this.handleResolution}>Click me to change resolution</button>
            </div>
        )
    }

}

export default YouTubeDebugger;