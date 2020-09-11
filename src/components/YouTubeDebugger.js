// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component {
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

   bitrateHandler = () => this.setState({ settings: { bitrate: 12 }});
   resolutionHandler = () => this.setState({ settings: { resolution: '720p'}});

   render = () => {
       return(
           <>
             <button className="bitrate" onClick={this.bitrateHandler}></button>
             <button className="resolution" onClick={this.resolutionHandler}></button>
           </>
       );
   }



}1