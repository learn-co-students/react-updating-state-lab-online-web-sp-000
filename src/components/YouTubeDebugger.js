// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {

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

  // Clicking this button changes the settings.bitrate state property to 12
  handleBitrateClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  }

  // Clicking this button changes the settings.video.resolution state property to '720p'
  handleResolutionClick = () => {
    this.setState({
      settings: {
          ...this.state.settings,
        video: {
          ...this.state.video,
          resolution: '720p'
        }
      }
    });
  }

  render() {
    return (
      <div>
        <button className='bitrate' onClick={this.handleBitrateClick}>Change Bitrate</button>
        <button className='resolution' onClick={this.handleResolutionClick}>Change Resolution</button>
      </div>
    );
  }

}

export default YouTubeDebugger
