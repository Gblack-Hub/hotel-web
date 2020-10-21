import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class Facilities extends Component {
	state = {
		facilities: ['air conditioning', 'on-site parking', 'free-wifi', 'restaurant', 'single-room', '']
	}
	render(){
		return (
			<div>
				<Typography variant="h4">FACILITIES</Typography>

			</div>
		);
	}
}
export default Facilities;