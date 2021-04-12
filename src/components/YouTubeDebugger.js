// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

class YoutubeDebugger extends Component {
constructor(props){
    super()
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

handleBitClick = () => {
    this.setState(previousState => {
      return {
        settings: {
            ...this.state.settings, 
            bitrate: 12
        }
      }
    })
  }

  handleResClick = () => {
    this.setState(previousState => {
      return {
            settings: {
                ...this.state.settings,
                video: {
                    ...this.video,
                    resolution: '720p'
                }
               
            }     
        
      }
    })
  }

render(){
    return(
        <div>
        <button className="bitrate" onClick={this.handleBitClick}>bitrate</button>
        <button className="resolution" onClick={this.handleResClick}>{console.log(this.state.settings)}</button>
        </div>
    )
}
}
export default YoutubeDebugger