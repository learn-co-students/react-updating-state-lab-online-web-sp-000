import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {
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

    bitClick = () => {
        this.setState({
            ...this.state,
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    resClick = () => {
        this.setState({
            ...this.state,
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        })
    }

    render() {
        return (
            <div>
                <button className='bitrate' onClick={this.bitClick}>Bit Rate</button>
                <button className='resolution' onClick={this.resClick}>Resolution</button>
            </div>
            )
    }
}
