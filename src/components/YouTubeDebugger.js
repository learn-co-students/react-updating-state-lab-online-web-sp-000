import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {
    constructor(){
        super()

        this.state={
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

    clickHandlerBitrate(){
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }
    
    render(){
        return(
            <div>
                <button onClick={this.clickHandlerBitrate} class="bitrate">Bitrate</button> 
                {/* <button onClick={this.clickHandlerResolution} class="resolution">Resolution</button> */}
            </div>
        )
    }
}