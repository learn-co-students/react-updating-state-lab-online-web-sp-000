import React from 'react'

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

    handleBitrateClickEvent = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    handleResClickEvent = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        })
    }

    render () {
        return (
            <div>
                <button className="bitrate" onClick={this.handleBitrateClickEvent}>click me</button>
                <button className="resolution" onClick={this.handleResClickEvent}>click me</button>
            </div>
        )
    }
}

export default YouTubeDebugger
