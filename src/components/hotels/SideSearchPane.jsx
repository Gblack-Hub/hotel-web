import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import Geocode from "react-geocode";

import MyLocationIcon from '@material-ui/icons/MyLocation';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

const marks = [
  {
    value: 500,
    label: 'N500/hr',
  },
  {
    value: 1000,
    label: 'N1000/hr',
  },
  {
    value: 2000,
    label: 'N2000/hr',
  },
  {
    value: 3000,
    label: 'N3000/hr',
  },
  {
    value: 4000,
    label: 'N4000/hr',
  },
  {
    value: 5000,
    label: 'N5000/hr',
  },
];

function valuetext(value) {
  return `N${value}/hr`;
}

class SideSearchPane extends Component{
	state = {
		value: 30,
		latitude: 38.736946,
		longitude: -9.142685,
		location: "",
		// noOfChildren: null,
		// noOfAdults: null,
		checkInDateTime: null,
		checkOutDateTime: null,
		size: 4,
		data: null
	}
	// componentDidMount(){
	// 	Geocode.setApiKey("AIzaSyAKZWv-ybYGdH6WZbOftXfLnQ4RPvIU1U8");
	// 	Geocode.setLanguage("en");
	// 	Geocode.enableDebug();

	// 	Geocode.fromAddress("Eiffel Tower").then(
	// 	  response => {
	// 	    const { lat, lng } = response.results[0].geometry.location;
	// 	    console.log(lat, lng);
	// 	  },
	// 	  error => {
	// 	    console.error(error);
	// 	  }
	// 	);
	// }

	// const [value, setValue] = React.useState(30);

	handleGetLocation = () => {
		let latitude = null;
		let longitude = null;

		window.navigator.geolocation.getCurrentPosition(
         success => this.setState({ latitude: success.coords.latitude, longitude: success.coords.longitude })
         // error=> console.log(error);
     	);
		console.log('Latitide: ', this.state.latitude);
		console.log('Longitude: ', this.state.longitude);
	}
	handleChange = (e) => {
		this.setState({ [e.target.id]: e.target.value }, ()=> {
			// console.log(this.state)
			// this.handleSearchRequest();
		});
	}
	handleSliderChange = (event, newValue) => {
		this.setState({ value: newValue });
		// console.log(this.state.value)
		// setValue(newValue);
	}
	// handleSearchRequest=(data) => {
	// 	axios.get('https://quickstays.azurewebsites.net/api/v1/hotels/', {
	// 		params: data
	// 	})
	// 	.then(res => {
	// 	   console.log(res.data.body.data);
	// 	   this.setState({hotels: res.data.body.data});
	// 	})
	// 	.catch(error => {
	// 		console.log(error);
	// 	});
	// }
	handleSubmit = async (e) => {
		e.preventDefault();
		this.setState({
			data: {
				location: this.state.location,
				latitude: this.state.latitude,
				longitude: this.state.longitude,
				size: this.state.size,
				// noOfChildren: this.state.noOfChildren,
				// noOfAdults: this.state.noOfAdults,
				start: moment(this.state.checkInDateTime).format("YYYY-MM-DD"),
				end: moment(this.state.checkOutDateTime).format("YYYY-MM-DD"),
			}
		}, () => {
			// console.log(this.state.data);
			// this.handleSearchRequest(this.state.data);
			this.props.onSubmitSearch(this.state.data);
		});

		// let searchData = this.props.location.state.searchData;
		// console.log(searchData);
		// axios.get('https://quickstays.azurewebsites.net/api/v1/hotels/', {
		// 	params: searchData
		// })
		// .then(res => {
		//    console.log(res.data.body.data);
		//    this.setState({hotels: res.data.body.data});
		// })
		// .catch(error => {
		// 	console.log(error);
		// });


		// try {
		// 	const res = await axios.get("https://quickstays.azurewebsites.net/api/v1/hotels", searchData);
		// 	console.log(res);
		// } catch(err) {
		// 	console.log(err);
		// }
	}


	render(){
		return (
			<div>
				<Card>
					<CardContent>
						Map Here
					</CardContent>
				</Card>
				<Card className="d-block mt-2">
					<CardContent>
						<form onSubmit={ this.handleSubmit }>
						<div className="input-group">
						  <div className="input-group-prepend my-auto mr-2">
						  	<IconButton onClick={this.handleGetLocation}>
						   	<MyLocationIcon fontSize="small" />
						  	</IconButton>
						  </div>
						  <input type="text" className="form-control" id="location" onChange={this.handleChange} aria-label="Enter Location" placeholder="Enter Location" />
						  <div className="input-group-append">
						    <button type="submit" className="btn btn-primary">Search</button>
						  </div>
						</div>
						<div className="d-flex justify-content-between align-items-center pb-4 pt-4">
							<div>Filters</div>
							<Button size="small" variant="outlined" className="btn btn-outline-primary">Clear all filters</Button>
						</div>
						{/*<Typography variant="body1">Check In Date and Time</Typography>*/}
						<TextField
							 onChange={this.handleChange}
							 variant="outlined"
						    id="checkInDateTime"
						    label="CHECK IN DATE AND TIME"
						    fullWidth
						    type="date"
						    // defaultValue="2017-05-24"
						    className="d-block"
						    InputLabelProps={{
						      shrink: true,
						    }}
						/>
						<div className="mt-3">
							<TextField
								 onChange={this.handleChange}
								 variant="outlined"
							    id="checkOutDateTime"
							    label="CHECK OUT DATE AND TIME"
							    fullWidth
							    type="date"
							    // defaultValue="2017-05-24"
							    className="d-block"
							    InputLabelProps={{
							      shrink: true,
							    }}
							/>
						</div>
						<div className="d-flex justify-content-between py-4">
							<div className="d-flex flex-column mr-2">
								{/*<Typography variant="body1" className="text-uppercase">No. of Adults</Typography>*/}
								<TextField
									 onChange={this.handleChange}
									 variant="outlined"
									 label="NO OF ADULTS"
								    id="noOfAdults"
								    className="d-block"
								    InputLabelProps={{
								      shrink: true,
								    }}
								/>
							</div>
							<div className="d-flex flex-column">
								{/*<Typography variant="body1" className="text-uppercase">No. of Children</Typography>*/}
								<TextField
									 onChange={this.handleChange}
									 variant="outlined"
									 label="NO OF CHILDREN"
								    id="noOfChildren"
								    className="d-block"
								    InputLabelProps={{
								      shrink: true,
								    }}
								/>
							</div>
						</div>
						<Typography variant="body1" className="text-uppercase">Price per hour</Typography>
				      <Slider
				        defaultValue={500}
				        getAriaValueText={valuetext}
				        aria-labelledby="price per hour"
				        step={10}
				        valueLabelDisplay="auto"
				        marks={marks}
				        value={this.state.value}
				        onChange={this.handleSliderChange}
				      />
				      </form>
					</CardContent>
				</Card>
			</div>
		);
	}
}
export default SideSearchPane;