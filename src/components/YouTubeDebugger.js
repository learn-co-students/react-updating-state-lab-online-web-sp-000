// Code YouTubeDebugger Component Here
import React, {Component} from 'react'

export default class YouTubeDebugger extends Component {

    constructor(props) {

        super(props)

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
        this.setState(previousState => {
            return {
                ...this.state.previousState,
                settings: {
                    
                    ...this.state.settings,
                    bitrate: 12,

                }
            }
        })
    }

    resolutionHandler = () => {
        this.setState(previousState => {
            return {
                ...this.state.previousState,
                settings: {
                    
                    ...this.state.settings,
                    video: {
                        resolution: "720p"
                    }

                }
            }
        })
    }


    render () {
        return (
            <div>
                <button onClick={this.bitrateHandler} className="bitrate">bitrate</button>
                <button onClick={this.resolutionHandler} className="resolution">resolution</button>
            </div>
            
        )
    }
}