import React, { Component } from 'react';
import { Typography } from '@material-ui/core';

class WhoAreWe extends Component {
    render() { 
        return (
            <div className="container-fluid mt-5">
                <div className="row primaryBgColor py-4">
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-3 my-auto">
                        <img className="img-fluid" src={require('../../../assets/images/who-are-we.png')} />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 text-left">
                        <Typography variant="h5" className="text-white">Who Are We?</Typography>
                        <hr style={{width: '100px' }} className="hrColor mb-4 float-left" />
                        <div className="clearfix"></div>
                        <Typography variant="h6" className="text-white lead" style={{lineHeight: '3rem'}}>A start-up company with a platform that connects space owners to their customers on a per hour use basis. Out platform provides to consumers and space owners flexible and functional space usage at flexible hours.</Typography>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default WhoAreWe;