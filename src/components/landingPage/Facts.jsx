import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import BookIcon from '@material-ui/icons/Book';
import MoodIcon from '@material-ui/icons/Mood';
import { Box } from '@material-ui/core';

class Facts extends Component {
	state = {
		data: [
			{ title: 'user access', value: '2,587,000', icon:  PersonIcon },
			{ title: 'hotels', value: '587,000', icon: HomeIcon },
			{ title: 'bookings', value: '4,567,000', icon: BookIcon },
			{ title: 'customers satisfied', value: '80%', icon: MoodIcon }
		]
	}
	render(){
		return (
			<div className="container py-5">
				<div className="row">
					<div className="col-12">
						<Box className="row justify-content-center py-2 px-5 primaryBgColor rounded-lg">
							{ this.state.data.map((item, index) => (
								<div className="col-md-4 col-lg-3 col-xl-3 col-6 my-3" key={index}>
									<div className="text-center text-white px-2">
										<Typography variant="h5" className="font-weight-bold mb-2">{item.value}</Typography>
										<Typography variant="caption" className="text-uppercase">{item.title}</Typography>
										<div className="text-center mt-2">
											<item.icon fontSize="large" color="secondary" />
										</div>
									</div>
								</div>
							)) }
						</Box>
					</div>
				</div>
			</div>
		);
	}
}
export default Facts;