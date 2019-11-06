import React from 'react';

class YouTubeDebugger extends React.Component {

    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        } 
    };

    bitrateChangeHandler = () => {
        this.setState({
            settings: {
            ...this.state.settings,
            bitrate: 12
            }
        });
    };

    resolutionChangeHandler = () => {
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
    console.log("bitrate test", this.state.settings.bitrate)
    console.log("resolution test", this.state.settings.video.resolution)
    return (
      <div>
        <button className="bitrate" onClick={this.bitrateChangeHandler}>
          Change bitrate
        </button>
        <button className="resolution" onClick={this.resolutionChangeHandler}>
          Change resolution
        </button>
      </div>
    );
  }
}

export default YouTubeDebugger;