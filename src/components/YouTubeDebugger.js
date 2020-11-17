const { Component } = require("react");

// Code YouTubeDebugger Component Here
export default class YouTubeDebugger extends Component {
  constructor() {
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

  handleClick = () => {
    this.
  }

  render(){
    return(
      <button class="bitrate" onClick={this.handleClick}></button>
    )
  }
}