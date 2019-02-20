import React from 'react';

class YouTubeDebugger extends React.Component {

  constructor() {
    super();
  }

  state = {
    errors: [],
    user: null,
    settings: {
                bitrate: 8,
                video: { resolution: '1080p' }
              }
  }

  changeBitrate = () => {
    this.setState({
      ...this.state,
      settings: { bitrate: 12,
                  video: { ...this.state.settings.video }}
    })

  }

  changeResolution = () => {
    this.setState({
      ...this.state,
      settings: { ...this.state.settings,
                  video: { resolution: "720p" }}
    })
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.changeBitrate}>Bitrate</button>
        <button className="resolution" onClick={this.changeResolution}>Resolution</button>
      </div>
    );
  }
}

export default YouTubeDebugger;
