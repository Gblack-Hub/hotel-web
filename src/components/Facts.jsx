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
						<Paper className="d-flex justify-content-between py-3 px-5" elevation={2}>
							{ this.state.data.map((item, index) => (
								<div className="text-center px-2" key={index}>
									<Typography variant="h6">{item.value}</Typography>
									<Typography variant="body1" color="textSecondary text-uppercase">{item.title}</Typography>
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