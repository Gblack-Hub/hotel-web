import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

class Facts extends Component {
	state = {
		data: [
			{ title: 'user access', value: '2,587,000' },
			{ title: 'hotels', value: '587,000' },
			{ title: 'bookings', value: '4,567,000' },
			{ title: 'customers satisfied', value: '80' }
		]
	}
	render(){
		return (
			<div className="container">
				<div className="row">
					<div className="col-12">
						<Paper className="row justify-content-between py-3 px-5" elevation={2}>
							{ this.state.data.map((item, index) => (
								<div className="col-md-4 col-lg-3 col-xl-3 col-6 mb-3" key={index}>
									<div className="text-center px-2">
										<Typography variant="h6">{item.value}</Typography>
										<Typography variant="body1" color="textSecondary" className="text-uppercase">{item.title}</Typography>
									</div>
									</div>
							)) }
						</Paper>
					</div>
				</div>
			</div>
		);
	}
}
export default Facts;