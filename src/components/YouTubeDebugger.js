import React from 'react';

export default class YouTubeDebugger extends React.Component  {
  constructor(){
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
  
  bitrateHandler = () => {
    this.setState({settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  }
  
  
  resolutionHandler = () => {
    const resolution = '720p';
    
    this.setState({settings: {
      ...this.state.settings,
      video:
        {
          ...this.state.settings.video,
          resolution: '720p' 
        }
      }
    });
  }
  
  render(){
    return (
      <div>
        <button className="bitrate" onClick={this.bitrateHandler} ></button>
        <button className="resolution" onClick={this.resolutionHandler} ></button>
      </div>);
    }
}