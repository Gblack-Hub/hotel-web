import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

class CopyrightsSection extends Component {
	render(){
		return (
			<Box className="container-fluid py-3 primaryBgColor">
                <div className="row justify-content-center align-items-center">
                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
				        <Typography variant="caption" className="text-white">&copy; 2020 Quikstays, All Rights Reserved</Typography>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 d-flex align-items-center justify-content-between">
				        <Link to="/" className="text-decoration-none text-white">
                            <Typography variant="caption">Terms of Service</Typography>
                        </Link>
                        <Link to="/" className="text-decoration-none text-white">
                            <Typography variant="caption">Privacy Policy</Typography>
                        </Link>
                        <Link to="/" className="text-decoration-none text-white">
                            <Typography variant="caption">Cookies Policy</Typography>
                        </Link>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 d-flex justify-content-center">
                        <FacebookIcon color="secondary" className="mr-3" />
                        <InstagramIcon color="secondary" className="mr-3" />
                        <TwitterIcon color="secondary" className="mr-3" />
                        <LinkedInIcon color="secondary" />
                    </div>
                </div>
			</Box>
		);
	}
}
export default CopyrightsSection;