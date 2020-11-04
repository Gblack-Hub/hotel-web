import { Typography } from '@material-ui/core';
import React, { Component } from 'react';
import SearchPane from './SearchPane.jsx' ;

const styles = {
	whyQuick: {
		position: 'absolute',
		marginLeft: 'auto',
		marginRight: 'auto',
		bottom: '0',
		left: '0',
		right: '0',
		width: '80%',
		textAlign: 'center',
		background: 'white',
		borderRadius: '5px 5px 0 0',
	}
}

class HomePage extends Component {
	render(){
		return (
			<div id="home" className="position-relative">
				<div className="px-4 mb-5 heroText">
					<Typography variant="h4" component="p" className="text-capitalize text-white mb-3">Functional Rooms At Flexible Hours</Typography>
					<Typography variant="body2" component="p" className="text-capitalize text-white">Enjoy luxury and comfort at affordable prices</Typography>
				</div>
				<div className="px-4" style={{position: 'absolute', bottom: '0', marginBottom: '90px', width: '100%'}}>
					<SearchPane />
				</div>
				<div className="d-block">
					<div className="pt-4" style={styles.whyQuick}>
						<Typography variant="h5" className="text-center">Why QuikStays?</Typography>
						<div className="text-center">
							<hr style={{width: '100px' }} className="hrColor" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default HomePage;