import React, {Component} from 'react'

class YouTubeDebugger extends Component {
    constructor(props) {
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

    bitrateHandler = () => {
        this.setState((previousState) => {
            return {
                ...previousState,
                settings: {
                    ...previousState.settings,
                    bitrate: 12
                }
            }
        })
    }

    resolutionHandler = () => {
        this.setState((previousState) => {
            return {
                ...previousState,
                settings: {
                    ...previousState.settings,
                    video: {
                        resolution: '720p'
                    }
                }
            }
        })
    }

    render() {
        return <div>
                    <button className="bitrate" onClick={this.bitrateHandler}>{this.state.settings.bitrate}</button>
                    <button className="resolution" onClick={this.resolutionHandler}>{this.state.settings.video.resolution}</button>
               </div>
    }
}

export default YouTubeDebugger