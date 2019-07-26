// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component {
  constructor(props){
    super(props);
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

  bitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  }

  resolution = () => {
    console.log(this.state.settings.video.resolution)
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    }, () => {console.log(this.state.settings.video.resolution)})
  }

  render(){
    return (
      <div>
        <button className="bitrate" onClick={this.bitrate}>Bitrate</button>
        <button className="resolution" onClick={this.resolution}>resolution</button>
      </div>
    );
  }
}