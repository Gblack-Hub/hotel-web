import React, { Component } from 'react';
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import axios from 'axios';

import Overview from './hotelDetail/Overview.jsx';
import Facilities from './hotelDetail/Facilities.jsx';
import Rooms from './hotelDetail/Rooms.jsx';
import Reviews from './hotelDetail/Reviews.jsx';

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';


class HotelDetail extends Component {
	state = {
		hotel_id: null,
		value: 0,
	}

	componentDidMount(){
		// axios.get('https://quickstays.azurewebsites.net/api/v1/hotels?size=10&start=2020-10-24&end=2020-10-25').then(res => {
		// 	console.log(res)
		// });
		// console.log(this.props.match.params.hotel_id);
		let id = this.props.match.params.hotel_id;
		this.setState({hotel_id: id});
	}
	// const [value, setValue] = React.useState(0);
	handleChange = (event, value) => {
	 this.setState({ value });
	}

	handleChangeIndex = index => {
	 this.setState({ value: index });
	}

	render(){
		return (
			<div className="mt-3">
				<Button size="small" disableElevation>
					<KeyboardBackspaceIcon fontSize="small" color="primary" /> <Typography color="primary" component="span">Back To Search Result</Typography>
				</Button>
				<div className="d-flex justify-content-between">
					<div className="d-flex flex-column">
						<Typography variant="h5">Eko Hotels & Suites {this.state.hotel_id}</Typography>
						<div className="d-flex">
							<StarIcon color="secondary" /><StarIcon color="secondary" /><StarIcon color="secondary" /><StarIcon color="secondary" /><StarHalfIcon color="secondary" />
						</div>
					</div>
					<div>
						<Button variant="contained" color="primary" disableElevation>Book Now</Button>
					</div>
				</div>
				<BrowserRouter>
		        <div>
		          <AppBar position="static" color="default">
		            <Tabs
		              value={this.state.value}
		              onChange={this.handleChange}
		              indicatorColor="primary"
		              textColor="primary"
		            >
		              <Tab label="Overview" component={Link} to="/overview" />
		              <Tab label="Facilities" component={Link} to="/facilities" />
		            </Tabs>
		          </AppBar>

		          <Switch>
		            {/*<Route path="/one" component={PageShell(ItemOne)} />
		            <Route path="/two" component={PageShell(ItemTwo)} />*/}
		            <Route path={"/hotel/detail/" + this.state.hotel_id} component={Overview} />
            		<Route path="/facilities" component={Facilities} />
            		<Route path="/rooms" component={Rooms} />
            		<Route path="/reviews" component={Reviews} />
		          </Switch>
		        </div>
		      </BrowserRouter>
			</div>
		);
	}
}
export default HotelDetail;