// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component {
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

  setBitrate = () => {
    this.setState(previousState => {
      return {
        ...this.state,
        settings: {
        bitrate: 12,
        video: {
          resolution: previousState.settings.video.resolution
        }
      }
    }
  })
    console.log(this.state)
  }

  setResolution = () => {
    this.setState(previousState => {
      return {
        ...this.state,
        settings: {
        bitrate: previousState.settings.bitrate,
        video: {
          resolution: "720p"
        }
      }
    }
  })
    console.log(this.state)
  }


  render() {
    return (
      <div>
        <button className={"bitrate"} onClick={this.setBitrate}>Bitrate</button>
        <button className={"resolution"} onClick={this.setResolution}>Resolution</button>
      </div>
    )
  }
}
