import React from 'react'

class YouTubeDebugger extends React.Component {
  constructor() {
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: { resolution: '1080p' }
      }
    }
  }

  handleBRClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  handleResClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: { resolution: '720p' }
      }
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleBRClick} className='bitrate' >
          Bitrate
        </button>
        <button onClick={this.handleResClick} className='resolution' >
          Resolution
        </button>
      </div>
    )
  }
}

export default YouTubeDebugger

