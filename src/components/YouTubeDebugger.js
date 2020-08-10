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
        }
    }

    handleBiterateClick = () => {
        this.setState({ settings: {...this.state.settings, bitrate: 12}})
    }

    handleResolutionClick = () => {
        this.setState(prevState => ({
            ...prevState,
            settings: {
                ...prevState.settings,
                video: {
                    resolution: '720p'
                }
            }
        }))
    }


    render() {
        return (
            <div>
                <button onClick={this.handleBiterateClick} className="bitrate">{this.state.settings.bitrate}</button>
                <button onClick={this.handleResolutionClick} className="resolution">{this.state.settings.video.resolution}</button>
            </div>

        )
    }
}

export default YouTubeDebugger;
