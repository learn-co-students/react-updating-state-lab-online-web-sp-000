// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

class YouTubeDebugger extends Component {
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


  handleBitrateClick = () => {
    console.log('bitrate ' + this.state.settings.bitrate)

    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  handleResloutionClick = () => {
    console.log('resolution: ' + this.state.settings.video.resolution)

    this.setState({
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
        <button onClick={this.handleBitrateClick}className='bitrate'>Bitrate</button>
        <button onClick={this.handleResloutionClick}className='resolution'>Resolution</button>
      </div>

    )
  }
}

export default YouTubeDebugger;
