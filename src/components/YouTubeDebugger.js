import React, {Component} from 'react'

class YouTubeDebugger extends Component{

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

    handleBitrateClick = () =>{
        this.setState(previousState => {
            return {
                settings:{
                    ...previousState.settings,
                    bitrate: 12
                }
            }
        })
    }

    handleResolutionClick = () => {
        this.setState(previousState =>{
            return {
                settings:{
                    ...previousState.settings,
                    video:{
                        resolution: '720p'
                    }
                }
            }
        })
    }

    render(){
        return(
            <div>
                <button
                    className= 'bitrate'
                    onClick= {this.handleBitrateClick}
                />
                <button 
                    className= 'resolution'
                    onClick= {this.handleResolutionClick}
                />
            </div> 
        )
    }

}

export default YouTubeDebugger
