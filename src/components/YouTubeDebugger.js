// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {
    constructor(props) {
        // console.log('YouTubeDebugger',props)
        super(props)
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

      bitrate = (e) =>{
        this.setState({
              settings:{
                  ...this.state.settings,
                  bitrate: 12
              }
        })


      }
      resolution = (e) =>{
        this.setState({
            settings:{
                ...this.state.settings,
                video: {
                    ...this.state.video,
                    resolution: '720p'

                } 
            }
      })

      }


      render() {
          
        return (
          <div>
              {console.log(this.state)}
             <button className='bitrate' onClick={this.bitrate} >Click me</button>
             <button className='resolution' onClick={this.resolution} >Click me</button>
          </div>
        )
      }
      
}