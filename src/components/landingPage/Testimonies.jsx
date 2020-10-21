import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class Testimonies extends Component {
	state = {
		data: [
			{ name: '', testimony: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua.' }
		]
	}
	render(){
		return (
			<div className="text-center py-5">
				<Typography variant="h6" className="font-weight-bold">Our Customer's Words</Typography>
				<Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua.</Typography>
			</div>
		);
	}
}
export default Testimonies;