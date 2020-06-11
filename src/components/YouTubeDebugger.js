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
    }
  }

  // Clicking button changes/updates the settings.bitrate state property to 12.
  handleBitrateStateChange = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  // Clicking button changes/updates the settings.video.resolution state property to '720p'.
  handleResolutionStateChange = () => {
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
        <button onClick={this.handleBitrateStateChange} className='bitrate'>Bitrate</button>
        <button onClick={this.handleResolutionStateChange} className='resolution'>Resolution</button>
      </div >
    )
  }
}

export default YouTubeDebugger;