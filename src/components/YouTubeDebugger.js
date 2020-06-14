import React, {Component} from 'react'

export default class YouTubeDebugger extends Component {
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

    bitrateIncrease = () => {
        this.setState(lastState => {
            return {
                settings: {
                    ...this.state.settings,
                    bitrate: 12,
                }
            }
        })
    }

    resolutionIncrease = () => {
        this.setState(lastState => {
            return {
                settings: {
                    ...lastState.settings, 
                    video: {
                        ...lastState.settings.video, 
                        resolution: '720p'
                    }
                }
            }
        })
    }

    render() {
        return (
            <div> 
                <button className='bitrate' onClick={this.bitrateIncrease}> 
                Bitrate {this.state.settings.bitrate}
                </button>

                <button className='resolution' onClick={this.resolutionIncrease}>
                Current Resolution is {this.state.settings.video.resolution }
                </button>
            </div>
        )
    }
}