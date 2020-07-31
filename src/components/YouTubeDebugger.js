// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export class YouTubeDebugger extends Component {
  constructor (props) {
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

  handleBitrate = e => this.setState(s => ({ ...s, settings: { bitrate: 12 } }))

  handleResolution = e =>
    this.setState(s => ({ ...s, settings: { video: { resolution: '720p' } } }))

  render () {
    return (
      <div>
        <button onClick={this.handleBitrate} className='bitrate'></button>
        <button onClick={this.handleResolution} className='resolution'></button>
      </div>
    )
  }
}

export default YouTubeDebugger
