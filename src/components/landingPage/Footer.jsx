import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

class Footer extends Component {
	render(){
		return (
			<div className="container-fluid px-5 py-5 bg-light">
				<div className="row">
					<div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4">
						<img src={require('../../assets/images/logo.png')} style={{height: '40px'}} />
						<Typography variant="body1" className="mt-3">A micro stay booking that will allow hotels to set their own price per hour and allow consumers to book hotels flexibly per hour.</Typography>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4">
						<Typography variant="body1" color="primary" className="font-weight-bold mb-3">Quik Stays in</Typography>
						<Typography variant="body1" className="mb-2">Uk</Typography>
						<Typography variant="body1" className="mb-2">Paris</Typography>
						<Typography variant="body1" className="mb-2">Berlin</Typography>
						<Typography variant="body1" className="mb-2">Nigeria</Typography>
						<Typography variant="body1" className="mb-2">Rio de Janeiro</Typography>
						<Typography variant="body1" className="mb-2">All Location</Typography>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4">
						<Typography variant="body1" color="primary" className="font-weight-bold mb-3">Quick Links</Typography>
						<Link to="/profile" className="text-decoration-none text-dark"><Typography variant="body1" className="mb-2">My Profile</Typography></Link>
						<Link to="/" className="text-decoration-none text-dark"><Typography variant="body1" className="mb-2">Home</Typography></Link>
						<Link to="/about-us" className="text-decoration-none text-dark"><Typography variant="body1" className="mb-2">About Us</Typography></Link>
						<Link to="/help-and-support" className="text-decoration-none text-dark"><Typography variant="body1" className="mb-2">Help & Support</Typography></Link>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4">
						<Typography variant="body1" color="primary" className="font-weight-bold mb-3">Subscribe</Typography>
						<Typography variant="body1" className="mb-2">Subscribe to stay in touch with the latest updates and vacancy information.</Typography>
						<div className="input-group mb-3">
							<input type="email" class="form-control" placeholder="Email Address" aria-label="Email" aria-describedby="email-address" />
							<div className="input-group-append">
								<span className="input-group-text secondaryBgColor" id="basic-addon1"><SendIcon fontSize="small" className="text-white" /></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Footer;