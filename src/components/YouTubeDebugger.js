import React, { component } from 'react';

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

  handleBitrateClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  };

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
  };

  render() {
    return (
      <div>
        <div>
          <button className='bitrate' onClick={this.handleBitrateClick}>
            {this.state.settings.bitrate}
          </button>
        </div>
        <div>
          <button className='resolution' onClick={this.handleResolutionClick}>
            {this.state.settings.video.resolution}
          </button>
        </div>
      </div>
    );
  }

}