// Code YouTubeDebugger Component Here
import React from 'react';
 
class YoutubeDebugger extends React.Component {
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
  
//   Create a button with the class 'bitrate'. Clicking this button changes the settings.bitrate state property to 12.

// Create a button with the class 'resolution'. Clicking this button changes the settings.video.resolution state property to '720p'.
  handleClickB = () => {
    this.setState({
        settings: {
            ...this.state.settings,
            bitrate: 12
        }
    }, () => console.log(this.state));
  }
  handleClickR = () => {
    this.setState({
        ...this.state,
        settings: {
            ...this.state.settings,
            video: {
                ...this.state.settings.video,
                resolution: '720p'
            }
        }
    }, () => console.log(this.state));
  }
 
  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleClickB}>1</button>
        <button className="resolution" onClick={this.handleClickR}>2</button>
      </div>
    );
  }
}
 
export default YoutubeDebugger;
