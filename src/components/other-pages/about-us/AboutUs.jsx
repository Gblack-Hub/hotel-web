import React, { Component } from 'react';
import CopyrightsSection from '../../landingPage/CopyrightsSection';
import Footer from '../../landingPage/Footer';
import Home from './Home';
import WantToTalk from './WantToTalk';
import WhoAreWe from './WhoAreWe';

class AboutUs extends Component {
    state = {

    }
    render() { 
        return (
            <div>
                <Home />
                <WhoAreWe />
                <WantToTalk />
                <Footer />
                <CopyrightsSection />
            </div>
        );
    }
}
 
export default AboutUs;