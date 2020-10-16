import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import HotelIcon from '@material-ui/icons/Hotel';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import SpeedIcon from '@material-ui/icons/Speed';

class Services extends Component {
	state = {
		data: [
			{ icon: AcUnitIcon, title: 'Book Per Hour', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet.'},
			{ icon: HotelIcon, title: 'Book Per Hour', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet.'},
			{ icon: FreeBreakfastIcon, title: 'Affordable Luxury', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet.'},
			{ icon: SpeedIcon, title: 'Quick Confirmation', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet.'}
		]
	}
	render(){
		return (
			<div className="container my-4">
				<div className="row">
				{ this.state.data.map((item, index) => (
					<div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 text-center" key={index}>
						<item.icon fontSize="large" />
						<Typography variant="h6">{ item.title }</Typography>
						<Typography variant="body1">{ item.content }</Typography>
	          	</div>
				)) }
				</div>
			</div>
		);
	}
}
export default Services;