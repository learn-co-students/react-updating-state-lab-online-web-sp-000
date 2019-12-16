// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component {
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

    brHandler = () => {
        this.setState(previousState => {
            return {
                ...previousState,
                settings: {
                    ...previousState.settings,
                    bitrate: 12
                }
            }
        })
    }

    resHandler = () => {
        this.setState(previousState => {
            return {
                ...previousState,
                settings: {
                    ...previousState.settings,
                    video: {
                        resolution: '720p'
                    }
                }
            }
        })
    }

    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.brHandler}></button>
                <button className="resolution" onClick={this.resHandler}></button>
            </div>
        )
    }
}