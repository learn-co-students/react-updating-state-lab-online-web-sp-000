// Code YouTubeDebugger Component Here
// Code DigitalClicker Component Here
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
 
  // Clicking this button changes the settings.bitrate state property to 12.
  handleBitrateStateChange = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  }

  //Clicking this button changes the settings.video.resolution state property to '720p'
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
      <button className="bitrate" onClick={this.handleBitrateStateChange}>Bitrate Button</button>
      <button className="resolution" onClick={this.handleResolutionStateChange}>Resolution Button</button>
    </div>)
  }
}

export default YouTubeDebugger;