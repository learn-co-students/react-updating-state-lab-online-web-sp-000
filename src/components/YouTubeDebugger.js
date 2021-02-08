// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

class YouTubeDebugger extends Component {

    constructor() {
      super();
   
      // Define the initial state:
      this.state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution:  '1080p'
            }
        }
      };
    }

    handleBitrateClick = () => {
        this.setState( {
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        });
    }

    handleResolutionClick = () => {
        this.setState( {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution:  '720p'
                }
            }
        });
    }

    render() {
      return (
        <div>
          <button onClick={this.handleBitrateClick} className="bitrate">bitrate 12</button>
          <button onClick={this.handleResolutionClick} className="resolution">resolution 720p</button>
        </div>
      );
    }
  }

  export default YouTubeDebugger