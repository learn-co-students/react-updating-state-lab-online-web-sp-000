// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
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
    };
  }

  clickedBitRate = () => {
    this.setState(state => {
      state.settings.bitrate = 12;
      return state;
    })
  }

  clickedResolution = () => {
    this.setState(state => {
      state.settings.video.resolution = '720p';
      return state;
    })
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.clickedBitRate}>Bitrate</button>
        <button className="resolution" onClick={this.clickedResolution}>Resolution</button>
      </div>
    )
  }
}

export default YouTubeDebugger;
