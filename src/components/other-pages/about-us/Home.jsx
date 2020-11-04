import React, { Component } from 'react';
import { Typography } from '@material-ui/core';

class Home extends Component {
    state = {

    }
    
    render() { 
        return (
            <div id="aboutUsHome">
                <div className="aboutUsHeroText text-center text-white">
                    <Typography variant="h3" className="text-capitalize mb-4">Functional Rooms At flexible hours</Typography>
                    <Typography variant="body1" className="text-capitalize">Enjoy luxury and comfort at affordable prizes</Typography>
                </div>
            </div>
        );
    }
}
 
export default Home;