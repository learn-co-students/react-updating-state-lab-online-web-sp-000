import React from 'react'

class YouTubeDebugger extends React.Component {
    constructor(props){
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
    clickHandler = () => {
        this.state.settings.bitrate = 12
        console.log('bitrate changed')
    }

    clickHandler2 = () => {
        this.state.settings.video.resolution = '720p'
        console.log('resolution changed')
    }

    render() {
        return (
            <div>
                <button className='bitrate' onClick={this.clickHandler}>Change Bitrate</button>
            
                <button className='resolution' onClick={this.clickHandler2}>Change Resolution</button>
            </div>
        )
    }
}

export default YouTubeDebugger;