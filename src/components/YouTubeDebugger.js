// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

class YouTubeDebugger extends Component {
	constructor() {
		super();
		this.state = {
	    errors: [],
	    user: null,
	    settings: {
	      bitrate: 8,
	      video: {
	        resolution: '1080p'
	      }
	    }
	  };
	};

	bitrateChange = () => {
		this.setState(previousState => {
			return {settings: { 
				...previousState.settings,
				bitrate: previousState.settings.bitrate === 8 ? 12 : 8
			}};
		})
	};

	resolutionChange = () => {
		this.setState(previousState => {
			return {settings: { ...previousState.settings,
				video: {
					...previousState.settings.video,
					resolution: previousState.settings.video.resolution === '1080p' ? '720p' : '1080p' }
			}}
		})
	};

	render() {
		return (
			<div>
				<button className='bitrate' onClick={this.bitrateChange}> 
					Bitrate {this.state.settings.bitrate} 
				</button>
				<button className='resolution' onClick={this.resolutionChange}> 
					Resolution {this.state.settings.video.resolution} 
				</button>
			</div>
		)
	};
}

export default YouTubeDebugger;