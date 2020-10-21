import React, { Component } from 'react';
import { BrowserRouter as Router, Route/*, Redirect, Switch */} from 'react-router-dom';

import SideSearchPane from './SideSearchPane.jsx';
import HotelList from './HotelList.jsx' ;
import HotelDetail from './HotelDetail.jsx' ;


export default function Home(){
	return (
		<div className="container-fluid pt-2">
			<div className="row">
				<div className="col-sm-12 col-md-4 col-lg-3 col-xl-3">
					<SideSearchPane />
				</div>
				<div className="col-sm-12 col-md-8 col-lg-9 col-xl-9">
					<Router>
						<Route exact path="/hotels" component={HotelList}></Route>
     					<Route path="/hotel/detail/:hotel_id" component={HotelDetail}></Route>
					</Router>
				</div>
			</div>
		</div>
	);
}