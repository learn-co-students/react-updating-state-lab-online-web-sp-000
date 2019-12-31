import React from 'react';

export default class YouTubeDebugger extends React.Component {
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
    };
  }

  onBitClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  }

  onResClick = () => {
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
        <button className="bitrate" onClick={this.onBitClick}>
          Update Bitrate
        </button>
        <button className="resolution" onClick={this.onResClick}>
          Update Resolution
        </button>
      </div>
    );
  }
}
