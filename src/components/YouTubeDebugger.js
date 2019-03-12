import React, { Component } from 'react';

class YouTubeDebugger extends Component {
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }


  handleChangeBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      }
    })
  }

  handleChangeResolution = () => {
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
      <React.Fragment>
        <button
          className='bitrate'
          onClick={this.handleChangeBitrate}>
          Change Bitrate
        </button>

        <button
          className='resolution'
          onClick={this.handleChangeResolution}>
          Change Resolution
        </button>
      </React.Fragment>
    )
  }
}

export default YouTubeDebugger;