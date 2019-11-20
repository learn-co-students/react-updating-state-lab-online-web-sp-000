// Code YouTubeDebugger Component Here
// Code DigitalClicker Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component {
    constructor() {
        super()
        
        // Define the initial state:
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

    handleBitRateClick = () => {
        this.setState(previousState => {
          return {
            settings: {
                ...this.state.settings,
                bitrate: 12
              }
          }
        })
      }

    handleResClick = () => {
        this.setState(previousState => {
            return {
                settings: {
                    ...this.state.settings,
                    video: {
                        resolution: '720p'
                    }
                }
            }
        })
    }  
     
    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.handleBitRateClick}>Change Bitrate</button>
                <button className="resolution" onClick={this.handleResClick}>Change Resolution</button>
            </div>
        )
    }
}