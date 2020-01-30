// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component{
    constructor () {
        super()

        this.state = {
            errors:[],
            user: null,
            setting: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
          }
        }
    
    handleChangeBitrate = () => {
        this.setState({
            settings: {
                ...this.state.setting,
                bitrate: 12
            }
        })
    }

    handleChangeResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720'
                }
            }
        });
    
    };

    render() {
        return(
            <div>
                <button className="bitrate" onClick={this.handleChangeBitrate}>
                    Change bitrate
                </button>
                <button className="resolution"> onClick={this.handleChangeResolution}>
                    Change resolution
                </button>
            </div>
        )
    }
}

export default YouTubeDebugger
