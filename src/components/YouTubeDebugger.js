import React, {Component} from 'react';

export default class YouTubeDebugger extends Component {

    constructor (props) {
        super ()
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
          this.handleClickBitrate = this.handleClickBitrate.bind(this);
          this.handleClickResolution = this.handleClickResolution.bind(this);
      }
    
      handleClickBitrate () {
        this.setState({
          settings: Object.assign({}, this.state.settings, {
            bitrate: 12
          }),
        });
      }
      handleClickResolution (event) {
        this.setState({
          settings: Object.assign({}, this.state.settings, {
            video: Object.assign({}, this.state.settings.video, {
              resolution:'720p'
            })
          })
        });
      }

    render() {
        return (
            <div>
            <button className='bitrate' onClick={this.handleClickBitrate}></button>
            <button className='resolution' onClick={this.handleClickResolution}></button>
            </div>
        )
    }
}