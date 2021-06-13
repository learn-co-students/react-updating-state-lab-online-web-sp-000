// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
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

    handleClickBit = () => {
        this.setState(previousState =>{
            return {
                settings: {
                    ...previousState.settings,
                    bitrate: 12
                }
            }
        }
        )
        // onclick settings.bitrate: 12

    }

    handleClickRes = () => {
        this.setState( previousState => {
            return {
                settings:{
                ...previousState.settings,
                video: {
                    ...previousState.settings.video,
                    resolution: '720p'}}  
            }
        }
        )
        // onclick settings.video.resolution: '720p'

    }

    render(){
        return(
            <div>
                <button className={'bitrate'} onClick={this.handleClickBit}>Bit Rate</button>
                <button className={'resolution'} onClick={this.handleClickRes}>720p Resolution</button>
            </div>
            
        )
    }
}

export default YouTubeDebugger