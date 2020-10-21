import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
// import AcUnitIcon from '@material-ui/icons/AcUnit';
import HotelIcon from '@material-ui/icons/Hotel';
import IconButton from '@material-ui/core/IconButton';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import SpeedIcon from '@material-ui/icons/Speed';

class Services extends Component {
	state = {
		data: [
			// { icon: AcUnitIcon, title: 'Book Per Hour', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua.'},
			{ icon: HotelIcon, title: 'Book Per Hour', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua.'},
			{ icon: FreeBreakfastIcon, title: 'Affordable Luxury', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua.'},
			{ icon: SpeedIcon, title: 'Quick Confirmation', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua.'}
		]
	}
	render(){
		return (
			<div className="container my-4">
				<div className="row mb-4">
					<div className="col-12">
						<Typography variant="h6" className="text-center">Why QuickStays?</Typography>
						<Divider />
					</div>
				</div>
				<div className="row">
				{ this.state.data.map((item, index) => (
					<div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center" key={index}>
						<IconButton aria-label={item.title} style={{ backgroundColor: "teal" }} component="span">
							<item.icon fontSize="large" />
						</IconButton>
						<Typography variant="body1" className="text-uppercase py-3">{ item.title }</Typography>
						<Typography variant="body2">{ item.content }</Typography>
	          	</div>
				)) }
				</div>
			</div>
		);
	}
}
export default Services;