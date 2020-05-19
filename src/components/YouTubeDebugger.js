import React, { Component } from 'react';

export class YouTubeDebugger extends Component {

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

    handleBitRateClick = (event) => {
        this.setState({
           settings: {
              ...this.state.settings,
              bitrate: 12
           }
        })
     }
  
     handleResolutionClick = (event) => {
        this.setState({
           settings: {
              ...this.state.settings,
              video: {
                 resolution: '720p'
              }
           }
        })
     }

    render() {
        console.log("bitRate: ", this.state.settings.bitrate)
        console.log("resolution: ", this.state.settings.video.resolution)
        return (
           <div>
             <button className="bitrate" onClick={this.handleBitRateClick}>Increase Bit Rate to 12</button> 
             <button className="resolution" onClick={this.handleResolutionClick}>Reduce Resolution to 720p</button> 
           </div>
        );
     }
  }


export default YouTubeDebugger;