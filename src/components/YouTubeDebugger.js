import React from 'react';

class YouTubeDebugger extends React.Component {

    constructor() {
        super();

        this.state ={
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
    bitRateChange = () => {
        this.setState({
            settings: {
              ...this.state.settings,
              bitrate: 12
            }
          });
    }

    resolutionChange = () => {
        this.setState({
            settings: {
              ...this.state.settings,
              video: {
                ...this.state.settings.video,
                resolution: '720p'
              }
            }
          });
         };
    render() {
        return(
            <div>
            <button className="bitrate" onClick={this.bitRateChange}>
              Change bitrate
            </button>
            <button className="resolution" onClick={this.resolutionChange}>
              Change resolution
            </button>
          </div>
        )
    }



}


export default YouTubeDebugger