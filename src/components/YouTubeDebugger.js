// Code YouTubeDebugger Component Here
import React from "react";

export default class YouTubeDebugger extends React.Component {
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
// handleBitrateClick = (event) => {
//     let value = (event.target.value
//   switch (value) {
//     case 'bitrate':
//       this.setState({
//         settings:{
//           ...this.state.settings,
//           bitrate: 12
//         }
//       })
//     case 'resolution':
  handleResolutionClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    })
  }
//
//
//   }
//     // console.log(event.target.className)
// }

  handleBitrateClick = () => {
    this.setState({
      ...this.state,
      settings: {
        ...this.state.settings,
        bitrate: 12 }
    })
   }




  render(){
    return(
<div>
      <button
        className='bitrate'
        onClick={this.handleBitrateClick}
        value='bitrate'
      >
        Bitrate
      </button>

        <button
          onClick={this.handleResolutionClick}
          className='resolution'
          value={'resolution'}
        >
         ChangeResolution
        </button>
    </div>
    )
  }

}
