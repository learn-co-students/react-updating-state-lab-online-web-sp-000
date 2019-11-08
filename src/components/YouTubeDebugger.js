// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {
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

    handleBitrateClick = () => {
        let newBitrate = {...this.state.settings, bitrate: 12}
        this.setState({
            settings: newBitrate
        })
    }

    handleResolutionClick = () => {
        let newRes = { ...this.state.settings, video: {resolution: '720p'}}
        this.setState({
            settings: newRes
        })
    }

    render () {
        console.log(this.state.settings)
        return (
            <React.Fragment>
                <button className="bitrate" onClick={this.handleBitrateClick}></button>
                <button className="resolution" onClick={this.handleResolutionClick}></button>
            </React.Fragment>
        )
    }
}

export default YouTubeDebugger 