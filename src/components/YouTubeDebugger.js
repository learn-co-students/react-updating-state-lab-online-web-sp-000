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
    };
  }

  changeBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  };

  changeResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    });
  };

  render() {
    return (
      <div>
          {this.state.settings.bitrate}
        <button className="bitrate" onClick={this.changeBitrate}>
          Change bitrate to 12
        </button>
        {this.state.settings.video.resolution}
        <button className="resolution" onClick={this.changeResolution}>
          Change resolution to 720p
        </button>
      </div>
    );
  }
}

export default YouTubeDebugger;