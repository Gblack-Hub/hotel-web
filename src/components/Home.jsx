import React, { Component } from 'react';

import HomePage from './landingPage/HomePage.jsx' ;
import WhyQuickstays from './landingPage/WhyQuickstays.jsx' ;
import Hotels from './landingPage/Hotels.jsx' ;
import Testimonies from './landingPage/Testimonies.jsx' ;
import Facts from './landingPage/Facts.jsx' ;
import Footer from './landingPage/Footer.jsx';
import CopyrightsSection from './landingPage/CopyrightsSection.jsx';

class Home extends Component {
	render(){
		return (
			<div>
				<HomePage />
		      	<WhyQuickstays />
		      	<Hotels />
		      	<Testimonies />
		      	<Facts />
				<Footer />
				<CopyrightsSection />
			</div>
		);
	}
}
export default Home;