// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
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

    increaseBitrate = () => {
        this.setState({
            settings: {...this.state.settings, bitrate: 12}
        })
    }

    lowerResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings, 
                video: {
                    ...this.state.settings.videos,
                    resolution: '720p'
                }
            }
        })
    }

    render () {
        return (
            <div>
                <button className='bitrate' onClick={this.increaseBitrate} >Bitrate</button>,
                <button className='resolution' onClick={this.lowerResolution} >Resolution</button>
            </div>
        );
    }

}

export default YouTubeDebugger;
