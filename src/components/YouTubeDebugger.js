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

  bitrateClickHandler = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    }, () => { return console.log(this.state.settings)})
  }

  resolutionClickHandler = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    }, () => { return console.log(this.state.settings)})
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.bitrateClickHandler}>Click to change bitrate</button>
        <button className="resolution" onClick={this.resolutionClickHandler}>Click to change resolution</button>
      </div>
    );
  }
}

export default YouTubeDebugger;
