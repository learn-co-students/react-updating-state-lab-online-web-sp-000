// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

class YouTubeDebugger extends Component {

    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }

    handleClick = () => this.setState({
        settings: {
            ...this.state.settings,
            bitrate: 12
        }
    })

    changeRes = () => this.setState({
        settings: {
            ...this.state.settings,
            video: {
                resolution: '720p'
            }
        }
    })

    render() {
        return (
            <div>    
                <button className="bitrate" onClick={this.handleClick}>YouTubeDebugger
                </button>
                <button className="resolution" onClick={this.changeRes}>Res</button>
            </div>
        )
    }
}

export default YouTubeDebugger;