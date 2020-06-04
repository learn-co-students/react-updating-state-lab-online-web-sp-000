import React from "react";

export default class YouTubeDebugger extends React.Component {
  constructor() {
    super();
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

  bitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  };

  resolution = () => {
    return this.setState(
      {
        settings: {
          ...this.state.settings,
          video: {
            ...this.state.settings.video,
            resolution: "720p"
          }
        }
      },
      () => {
        console.log(this.state);
      }
    );
  };
  //     // this.setState({
  //     addressInfo: {
  //     ...this.state.addressInfo,
  //     city: 'New York City'
  //   }
  // });

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.bitrate}></button>,
        <button className="resolution" onClick={this.resolution}></button>
      </div>
    );
  }
}
