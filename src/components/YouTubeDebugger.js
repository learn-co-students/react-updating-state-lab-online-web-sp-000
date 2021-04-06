// Code YouTubeDebugger Component Here
// src/components/ClickityClick.js
import React from 'react';
 
class YouTubeDebugger extends React.Component {
    constructor() {
        super();
     
        // Define the initial state:
        this.state = {
          errors: [],
          user: null,
          settings: {
              bitrate: 8,
              video: {
              resolution: '1080p'
          }
    }
        };
      }
     
      handleClickBitrate = () => {
          // when handleClick is called, newCount is set to whatever this.state.count is plus 1 PRIOR to calling this.setState
          this.setState(previousState => {
              return {
                settings: {
                    ...this.state.settings,
                    bitrate: 12
                }
              }
            })
            //console.log(this.state.timesClicked)
        }
  
      handleClickResolution = () => {
          // when handleClick is called, newCount is set to whatever this.state.count is plus 1 PRIOR to calling this.setState
          this.setState(previousState => {
              return {
                settings: {
                    ...this.state.settings,
                    video: {
                        ...this.state.settings.video,
                        resolution: '720p'
                    }
                }
              }
            })
            //console.log(this.state.timesClicked)
        }
     
      render() {
        return (
          <div>
            <p>resolution: {this.state.settings.video.resolution}, bitrate: {this.state.settings.bitrate}</p>
            <button onClick={this.handleClickBitrate} className='bitrate'>Bitrate</button>
            <button onClick={this.handleClickResolution} className='resolution'>Resolution</button>
          </div>
        );
      }
    }
 
export default YouTubeDebugger;