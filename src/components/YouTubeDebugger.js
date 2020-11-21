// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {

  constructor(props) {
    super()
    this.state = 
    {
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

    bitrateHandler = (event) => {
        this.setState({
        settings: {
            ...this.state.settings,
            bitrate: 12
        }
        });
    }

    resolutionHandler = (event) => {
    console.log(this.state.settings)
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.settings.video, {
          resolution: '720p'
        })
      })
    });
    }

  render() {
    return (
        <div>
        <button
        onClick={this.bitrateHandler}
        className="bitrate"
        >bitrate</button>
        <button
        onClick={this.resolutionHandler}
        className="resolution"
        >res</button>
        </div>
    )
  }
  
}