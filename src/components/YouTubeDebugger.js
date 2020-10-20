// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {

  constructor() {
    super()
    this.state = {errors:[], user:null, settings: {bitrate:8, video:{resolution:'1080p'
      }
    }
  }
}

handleClick = () => {
let settings = this.state.settings
    return this.setState({
      settings: Object.assign({}, settings, {
      bitrate:12
      })
    }
  );
}



handleClicker = () => {
let okay = this.state.settings
if (okay.video.resolution === "1080p") {
   this.setState(previousState => {
     return {errors:[], user:null, settings: {bitrate:8, video:{resolution: '720p'
        }
      }
    }
  })
} else {
  this.setState(previousState => {
    return {errors:[], user:null, settings: {bitrate:8, video:{resolution: '1080p'
       }
     }
   }
 })

}

 }


render() {
  return (
    <div>
      <button className= 'bitrate' onClick= {this.handleClick}>YouToob Bitrate {this.state.settings.bitrate}</button>
      <button className= 'resolution' onClick= {this.handleClicker}> {this.state.settings.video.resolution}
      </button>
    </div>
    )
  }

}
