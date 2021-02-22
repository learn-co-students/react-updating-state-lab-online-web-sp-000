// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
   constructor() {
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

   handleBitrateClick = () => {
      this.setState((previousState) => {
         [...previousState],
         previousState.settings.bitrate = 12
      })
      console.log(this.state)
   }

   handleResolutionClick = () => {
      this.setState((previousState) => {
         [...previousState],
         previousState.settings.video.resolution = '720p'
      })
      console.log(this.state)
   }

   render() {
      return (
         <div>
            <button className="bitrate" onClick={this.handleBitrateClick}>bitrate</button>
            <button className="resolution" onClick={this.handleResolutionClick}>resolution</button>
         </div>
      )
   }
}

export default YouTubeDebugger;