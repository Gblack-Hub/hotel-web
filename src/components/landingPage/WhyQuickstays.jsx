import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SpeedIcon from '@material-ui/icons/Speed';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import KingBedIcon from '@material-ui/icons/KingBed';

class Services extends Component {
	state = {
		data: [
			{ icon: HourglassEmptyIcon, title: 'Book Per Hour', content: 'Decide the check in and check out time.'},
			{ icon: KingBedIcon, title: 'Affordable Luxury', content: 'Enjoy all the services included within the hotel as you would on a full stay'},
			{ icon: SpeedIcon, title: 'Quick Confirmation', content: 'Immediate confirmation and free cancellation'}
		]
	}
	render(){
		return (
			<div className="container mt-5 my-4">
				{/* <div className="row mb-5">
					<div className="col-12 text-center">
						<Typography variant="h4" className="text-center">Why QuikStays?</Typography>
						<div className="text-center">
							<hr style={{width: '100px' }} className="hrColor" />
						</div>
					</div>
				</div> */}
				<div className="row">
				{ this.state.data.map((item, index) => (
					<div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3 px-5 text-center" key={index}>
						<IconButton aria-label={item.title} style={{backgroundColor: 'rgba(241, 182, 51, 0.3)'}} component="span">
							<item.icon fontSize="large" color="primary" />
						</IconButton>
						<Typography variant="body1" className="text-uppercase font-weight-bold py-3">{ item.title }</Typography>
						<Typography variant="body2">{ item.content }</Typography>
	          	</div>
				)) }
				</div>
			</div>
		);
	}
}
export default Services;