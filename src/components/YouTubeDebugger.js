import React, { Component} from 'react';

class YouTubeDebugger extends Component {
    constructor(){
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

    handleChangeBitrate = () => {
        this.setState({
            settings: {...this.state.settings,
                bitrate: 12,
            }
        })
    }

    handleChangeResolution = () => {
        this.setState({
            settings: {...this.state.settings,
                video: {...this.state.settings.video,
                    resolution: '720p'
                }
            }
        })
    }

    render(){
        return (
            <div>
                <button onClick={this.handleChangeBitrate} className="bitrate">Change Bitrate</button>
                <button onClick={this.handleChangeResolution} className="resolution">Change Resolution</button>
            </div>
        )
    }

}

export default YouTubeDebugger;