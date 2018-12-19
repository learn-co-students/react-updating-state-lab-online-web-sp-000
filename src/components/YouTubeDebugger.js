import React, { Component } from "react";

class YouTubeDebugger extends React.Component {
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: "1080p"
      }
    }
  };

  handleResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: "720p"
        }
      }
    });
  };

  handleBitRate = () => {
    this.setState({ settings: { ...this.state.settings, bitrate: 12 } });
  };

  render() {
    return (
      <React.Fragment>
        <button className="resolution" onClick={this.handleResolution} />;
        <button className="bitrate" onClick={this.handleBitRate} />;
      </React.Fragment>
    );
  }
}

export default YouTubeDebugger;

// Create a button with the class 'bitrate'.Clicking this button changes
// the settings.bitrate state property to 12.
// Create a button with the class 'resolution'.Clicking this button changes
// the settings.video.resolution state property to '720p'.
