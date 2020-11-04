import React, { Component } from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


class WantToTalk extends Component {
    handleChange=(e)=>{
        this.setState({ [e.target.id]: e.target.value });
    }
    handleSubmit=(e)=>{
        e.preventDefault();
    }
    render() { 
        return (
            <div className="container mt-5 mb-5">
                <div className="row py-4">
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-4">
                        <Typography variant="h5">Want to talk with us?</Typography>
                        <hr style={{width: '100px' }} className="hrColor mb-4 float-left" />
                        <div className="clearfix"></div>
                        <Typography variant="body1" className="mb-3">Feel free to contact us any time and we will get back to you as soon as we can!</Typography>
                        <form>
                            <div className="form-group">
                                <TextField
                                    id="name"
                                    onChange={this.handleChange}
                                    fullWidth
                                    required
                                    label="Your Name"
                                    variant="outlined"
                                />
                            </div>
                            <div className="form-group">
                                <TextField
                                    id="email"
                                    onChange={this.handleChange}
                                    fullWidth
                                    required
                                    label="Your Email Address"
                                    variant="outlined"
                                />
                            </div>
                            <div className="form-group">
                                <TextField
                                    id="subject"
                                    onChange={this.handleChange}
                                    fullWidth
                                    required
                                    label="Subject"
                                    variant="outlined"
                                />
                            </div>
                            <div className="form-group">
                                <TextField
                                    id="email"
                                    onChange={this.handleChange}
                                    multiline
                                    rows={4}
                                    fullWidth
                                    required
                                    label="Your Message"
                                    variant="outlined"
                                />
                            </div>
                            <div className="form-group">
                                <Button variant="contained" color="secondary" fullWidth disableElevation>Send</Button>
                            </div>
                        </form>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 text-left my-auto">
                        <Box className="primaryBgColor text-white p-3">
                            <Typography variant="h5">Info</Typography>
                            <hr style={{width: '100px' }} className="hrColor mb-5 float-left" />
                            <div className="clearfix"></div>
                            <div className="d-flex mb-5">
                                <div className="mr-3">
                                    <MailOutlineIcon />
                                </div>
                                <Typography variant="h5">admin@quikstays.com</Typography>
                            </div>
                            <div className="d-flex mb-5">
                                <div className="mr-3">
                                    <CallIcon />
                                </div>
                                <Typography variant="h5">07814884117</Typography>
                            </div>
                            <div className="d-flex mb-5">
                                <div className="mr-3">
                                    <LocationCityIcon />
                                </div>
                                <Typography variant="h5">Birmingham, England</Typography>
                            </div>
                        </Box>
                        <Box className="secondaryBgColor d-flex justify-content-center align-items-center float-right py-3 w-50">
                            <FacebookIcon color="primary" className="mr-3" />
                            <InstagramIcon color="primary" className="mr-3" />
                            <TwitterIcon color="primary" className="mr-3" />
                            <LinkedInIcon color="primary" />
                        </Box>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default WantToTalk;