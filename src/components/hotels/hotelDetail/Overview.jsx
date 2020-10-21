import React, { Component } from 'react';
import DirectionsIcon from '@material-ui/icons/Directions';
import Typography from '@material-ui/core/Typography';

class Overview extends Component {
	render(){
		return (
			<div>
				<Typography variant="h6">DESCRIPTION</Typography>
				<Typography variant="body1" component="p">
					Eko Hotels & Suites is the most preferred hotel in West Africa and it's all about
					the right mix! Located in the heart of Victoria Island and shielded from the hustle
					and bustle of the Lagos metropolis, we offer our corporate clients and walk in guests
					a perfect blend of relaxation, activities, and African tradition delicately infused
					to meet the highest international standards.
				</Typography>
				<Typography variant="body1" component="p">
					Eko Hotels & Suites is the most preferred hotel in West Africa and it's all about
					the right mix! Located in the heart of Victoria Island and shielded from the hustle
					and bustle of the Lagos metropolis, we offer our corporate clients and walk in guests
					a perfect blend of relaxation, activities, and African tradition delicately infused
					to meet the highest international standards.
				</Typography>
				<Typography variant="h6">HOTEL ADDRESS</Typography>
				<Typography variant="body1" component="p">
					Eko Hotels & Suites is located in the heart of Victoria Island and shielded from the hustle
					and bustle of the Lagos metropolis.
					<DirectionsIcon />
				</Typography>
			</div>
		);
	}
}
export default Overview;