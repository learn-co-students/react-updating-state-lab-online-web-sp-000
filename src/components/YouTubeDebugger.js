// Code YouTubeDebugger Component Here
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

  bitRateHandler = () => {
    this.setState({
      settings: {
      ...this.state.settings,
      bitrate: 12
      }
    })
  }

  resolutionHandler = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 8,
        video: {
      ...this.video,
      resolution: "720p"
        }
      }
    })
  }
  

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.bitRateHandler}></button>
        <button className="resolution" onClick={this.resolutionHandler}></button>
      </div>
    )
  }
}