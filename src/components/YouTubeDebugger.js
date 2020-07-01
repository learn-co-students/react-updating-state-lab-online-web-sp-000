import React, { Component } from 'react';
import { render } from 'enzyme';

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

    changeBitrateEvent = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    changeResolutionEvent = () => {
        this.setState({
            settings: {
                ...this.state.settings, 
                video: {
                    resolution: '720p'
                }
            }
        })
    }

    render() {
        return(
            <div>
                <button onClick={this.changeBitrateEvent} className="bitrate">Bitrate</button>
                <button onClick={this.changeResolutionEvent} className="resolution">Resolution</button>
            </div>
        )
    }
}