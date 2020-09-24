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

    handleBitRateChange = (event) => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    handleResolutionChange = (event) => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        })
    }

    render() {
        return(
            <div>
            <button className="bitrate" onClick={this.handleBitRateChange}>
                <label> 
                    {this.state.settings.bitrate}
                </label> 
            </button>
            <br />
            <button className="resolution" onClick={this.handleResolutionChange}> 
                <label> 
                    {this.state.settings.video.resolution}
                </label>
            </button>  
            </div>
        )
    }
}

export default YouTubeDebugger;