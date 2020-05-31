// Code YouTubeDebugger Component Here
import React, { Component } from "react";

class YouTubeDebugger extends Component {
	constructor() {
		super()
		this.state = {
			errors: [],
			user: null,
			settings: {
				bitrate: 8,
				video: {
					resolution: "1080p"
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
		}, () => console.log(this.state.settings.bitrate))
	}

	resHandler = () => {
		this.setState({
			settings: {
				...this.state.settings,
				video: {
					...this.state.settings.video,
					resolution: "720p"
				}
			}
		}, () => console.log(this.state.settings.video.resolution) )
	}

	render() {
		return (
			<div>
				<button onClick={this.bitrateHandler} className="bitrate" >Bit Rate</button>
				<button onClick={this.resHandler} className="resolution" >Resolution</button>				
			</div>
		)
	}
}


export default YouTubeDebugger;