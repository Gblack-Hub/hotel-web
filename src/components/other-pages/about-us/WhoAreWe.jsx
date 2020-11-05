import React, { Component } from 'react';
import { Typography } from '@material-ui/core';

class WhoAreWe extends Component {
    render() { 
        return (
            <div className="container-fluid primaryBgColor py-4 mt-5">
                <div className="row py-4">
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-3 my-auto">
                        <img className="img-fluid" src={require('../../../assets/images/who-are-we.png')} alt='who-are-we' />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 text-left">
                        <Typography variant="h5" className="text-white">Who Are We?</Typography>
                        <hr style={{width: '100px' }} className="hrColor mb-4 float-left" />
                        <div className="clearfix"></div>
                        <Typography variant="body1" component="p" className="text-white lead" style={{lineHeight: '2.5rem'}}>
                            Quikstays was established in England on September 7th, 2020 by seasoned business professionals from various
                            industries. They recognized that there is a growing demand for functional  room/space usage at flexible hours
                            and immediately set to work on creating Quikstays.com .
                        </Typography>
                        <Typography variant="body1" className="text-white" style={{lineHeight: '2.5rem'}}>
                            Quikstays is a platform that connects  space owners like hotels with their potential customers, thereby meeting
                            the space users unique needs while generating revenue for the space owners as well. Space owners that join our
                            platform will see an increase in their occupancy rate and revenue, and for the space users, our platform provides
                            a service that is user-friendly and cost effective.
                        </Typography>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-4 my-auto">
                        <Typography variant="h6" color="secondary" style={{lineHeight: '3rem'}}>Vision & Mission</Typography>
                        <hr style={{width: '100px' }} className="hrColor mb-4 float-left" />
                        <div className="clearfix"></div>
                        <Typography variant="body1" className="text-white lead" style={{lineHeight: '3rem'}}>
                            Our vision is to make our brand recognizable worldwide for the unique solutions we offer to deliver functional spaces at flexible prices to our customers.
                        </Typography>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 text-left">
                        <Typography variant="h6" color="secondary" style={{lineHeight: '3rem'}}>Service</Typography>
                        <hr style={{width: '100px' }} className="hrColor mb-4 float-left" />
                        <div className="clearfix"></div>
                        <Typography variant="body1" className="text-white lead" style={{lineHeight: '3rem'}}>
                        Our service is the various platforms we provide to connect consumers and space owners in various cities in the United Kingdom, and various parts of Africa.
                        </Typography>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default WhoAreWe;