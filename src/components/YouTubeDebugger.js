// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    // Define the initial state:
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

  handleBitrate = () => {
    this.setState({
        settings: {
            ...this.state.settings,
            bitrate: 12
        }
      })
  };

  handleResolution = () => {
    this.setState({
        settings: {
            ...this.state.settings,
            video: {
                resolution: '720p'
            }
        }
      })
  };

  render() {
    return (
      <div>
        <h4>Bitrate</h4>
        <button className='bitrate' onClick={this.handleBitrate}>12</button>
        <h4>Resolution</h4>
        <button className='resolution' onClick={this.handleResolution}>720</button>
      </div>
    );
  }
}

export default YouTubeDebugger;
