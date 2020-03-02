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

  somethingClicked1 = () => {
    this.setState({
      settings: {
        ...this.state.settings,
          bitrate: 12
      }
    })
  }

  somethingClicked2 = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    })
  }
  

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.somethingClicked1}></button>
        <button className="resolution" onClick={this.somethingClicked2}></button>
      </div>
    )
  }
}

export default YouTubeDebugger