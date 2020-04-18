// Code YouTubeDebugger Component Here
import React from 'react';

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

  fixBitRate = () => {
    this.setState({
        settings: {
          ...this.state.settings,
          bitrate: 12
        }
      });
  }

  fixRes = () => {
    this.setState({
        settings: {
          ...this.state.settings,
          video: {resolution: '720p'}
        }
      });
  }

  render() {
    return (
      <div>
        <button className='bitrate' onClick={this.fixBitRate}></button>
        <button className='resolution' onClick={this.fixRes}></button>
      </div>
    );
  }
}

export default YouTubeDebugger;