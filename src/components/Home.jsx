import React, { Component } from 'react';

import HomePage from './landingPage/HomePage.jsx' ;
import SearchPane from './landingPage/SearchPane.jsx' ;
import WhyQuickstays from './landingPage/WhyQuickstays.jsx' ;
import Hotels from './landingPage/Hotels.jsx' ;
import Testimonies from './landingPage/Testimonies.jsx' ;
import Facts from './landingPage/Facts.jsx' ;

class Home extends Component {
	render(){
		return (
			<div>
				<HomePage />
		      <SearchPane />
		      <WhyQuickstays />
		      <Hotels />
		      <Testimonies />
		      <Facts />
			</div>
		);
	}
}
export default Home;