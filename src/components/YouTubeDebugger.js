import React, { Component } from 'react'

export class YouTubeDebugger extends Component {
  constructor(props) {
    super(props)

    this.state = {
      "errors": [],
      "user": null,
      settings: {
        bitrate: 8,
        video: {
        resolution: '1080p'
        } 
      },
    }
  }

  handleClickBitRate = () => {
    this.setState({
      settings: {
      ...this.state.settings,
      bitrate: 12
    }
    })
  }
  
  handleClickResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
      ...this.state.video,
      resolution: "720p"
    }
  }
    })
  }
  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleClickBitRate}>Change Bitrate</button>
        <button className="resolution" onClick={this.handleClickResolution}>Change Resolution</button>
      </div>
    )
  }
}

export default YouTubeDebugger
