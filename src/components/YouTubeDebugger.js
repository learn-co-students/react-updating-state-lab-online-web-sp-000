import React, {Component} from 'react';

export default class YouTubeDebugger extends Component {

  constructor() {
    super();
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

  updateBitrate = () => {
    this.setState( prevState => {
      return {
        settings: {
          ...prevState.settings,
          bitrate: 12
        }
      }
    })
  }

  updateResolution = () => {
    this.setState( prevState => {
      return {
        settings: {
          ...prevState.settings,
          video: {
            ...prevState.settings.video,
            resolution: '720p'
          }
        }
      }
    })
  }

  render() {
    return (
      <div id="buttonHolder">
        <button className="bitrate" onClick={this.updateBitrate}>Bitrate</button>
        <button className="resolution" onClick={this.updateResolution}>Resolution</button>
      </div>
    )
  }
}