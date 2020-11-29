import React from 'react';

class YoutubeDebugger extends React.Component {
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

    bitrateHandler = () => {
        this.setState({
            settings: {
                ...this.state.settings, 
                bitrate: 12
            }
        })
    }

    resolutionHandler = () => {
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

    render () {
        return (
            <div>
                {/* // settings.bitrate state property to 12 */}
                <button className="bitrate" onClick={this.bitrateHandler}> Change bitrate  </button>

                {/* // settings.video.resolution state property to '720p'. */}
                <button className="resolution" onClick={this.resolutionHandler}>Rsolution</button>
             </div>
        )
    }
}

export default YoutubeDebugger;
