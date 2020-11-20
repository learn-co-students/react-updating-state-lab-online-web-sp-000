// Code YouTubeDebugger Component Here
import React from 'react'

class YoutubeDebugger extends React.Component {
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

    handleBitRateClick = () => {
        this.setState({
            settings: {
                ...this.state.settings, 
                bitrate: 12, 
            }
        })
    }

    handleResClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: { resolution: '720p' }
            }
        })
        console.log(this.state);
    }
    
    render() {
        return (
            <div>
                <button className='bitrate' onClick={this.handleBitRateClick}>Change Bitrate</button>
                <button className='resolution' onClick={this.handleResClick}>Change Resolution</button>
            </div>
        )
    }
}

export default YoutubeDebugger