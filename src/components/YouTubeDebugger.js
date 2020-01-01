// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component {

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

  bitrateClickHandler = () => {
    console.log(this.state)
    let newSettings = {...this.state.settings}
    newSettings.bitrate = 12
    this.setState(previousState => {
      return {
        settings: newSettings
      }
    })
  }

  resolutionClickHandler = () => {
    console.log(this.state)
    let newSettings = {...this.state.settings}
    newSettings.video = { resolution: '720p'}
    this.setState(previousState => {
      return {
        settings: newSettings
      }
    })
  }

  render() {
    return(
      <div>
        <button className='bitrate' onClick={this.bitrateClickHandler}>bitrate</button>
        <button className='resolution' onClick={this.resolutionClickHandler}>resolution</button>
      </div>
    )
  }
}
