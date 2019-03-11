import React, { Component } from "react";

export default class YouTubeDebugger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p"
        }
      }
    };
  }
  render() {
    return (
      <div>
        <button
          key="bitrate"
          className="bitrate"
          onClick={() => {
            this.setState({
              settings: { ...this.state.settings, bitrate: 12 }
            });
          }}
        >
          Bitrate
        </button>
        <button
          key="resolution"
          className="resolution"
          onClick={() => {
            this.setState({
              settings: {
                ...this.state.settings,
                video: { resolution: "720p" }
              }
            });
          }}
        >
          Resolution
        </button>
      </div>
    );
  }
}
