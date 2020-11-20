// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

export default class YouTubeDebugger extends Component{

    state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
      }

    upBitRate = () =>{
        this.setState({
            settings: {...this.state.settings, bitrate: 12}
        })
    }

    downRez = () => (
        this.setState({
            settings: {...this.state.settings, video: {resolution: '720p'}}
        })
    )

    render(){
        return(
            <div>
                <button className="bitrate"
                onClick={this.upBitRate}>
                    bit Rate, beyotch!
                </button>
                <button className="resolution"
                onClick={this.downRez}>
                    the resolution will not be televised!
                </button>
            </div>
        )
    }
}