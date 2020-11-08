import React, { Component } from 'react';
// import axios from 'axios';
import moment from 'moment';
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';
// import Geocode from "react-geocode";

import MyLocationIcon from '@material-ui/icons/MyLocation';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

const today = new Date();

const mapContainer = {
	position: 'relative',
   width: '100%',
   paddingBottom: '40.25%',
};
const mapStyles = {
    display: 'block',
    position: 'absolute',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    margin: '0',
    padding: '0',
    height: '100%',
    width: '100%',
};
// const mapStyles = {
//   width: '100%',
//   height: '100%'
// };

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
		noOfAdult: 0,
		noOfChildren: 0,
		guestCount: "",
		checkInDateTime: null,
		checkOutDateTime: null,
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

	handleGetLocation = () => {
		window.navigator.geolocation.getCurrentPosition(
         success => this.setState({ latitude: success.coords.latitude, longitude: success.coords.longitude })
         // error=> console.log(error);
     	);
		console.log('Latitide: ', this.state.latitude);
		console.log('Longitude: ', this.state.longitude);
	}
	handleSelectChange =(e)=> {
		this.setState({ [e.target.name]: e.target.value })
	}
	handleChange = (e) => {
		this.setState({ [e.target.id]: e.target.value }, ()=> {

		});
	}
	handleClearSearch=()=>{
		console.log('cleared')
		this.setState({
			location: "",
			latitude: "",
			longitude: "",
			noOfAdult: "",
			noOfChildren: "",
			checkInDateTime: "",
			checkOutDateTime: "",
		})
	}
	handleSliderChange = (event, newValue) => {
		this.setState({ value: newValue });
	}
	handleDataPass=()=>{
		this.setState({
			data: {
				location: this.state.location,
				latitude: this.state.latitude,
				longitude: this.state.longitude,
				start: moment(this.state.checkInDateTime).format("YYYY-MM-DD"),
				end: moment(this.state.checkOutDateTime).format("YYYY-MM-DD"),
			},
			guestCount: this.state.noOfAdult + this.state.noOfChildren,
		}, () => {
			console.log(this.state.data)
			this.props.onSubmitSearch(this.state.data);
			this.props.onSubmitGuestCount(this.state.guestCount);
		});
	}
	handleSubmit = async (e) => {
		e.preventDefault();
		this.handleDataPass();
	}


	render(){
		const { latitude, longitude } = this.props.searchData;

		return (
			<div>
				<Paper style={mapContainer} elevation={1}>
					<Map
						google={this.props.google}
						zoom={14}
						style={mapStyles}
						initialCenter={{
						lat: latitude,
						lng: longitude
						}}
					>
						<Marker
						onClick={this.onMarkerClick}
						name={'This is test name'}
					/>
					</Map>
				</Paper>
				<Card className="d-block mt-2 primaryBgColor text-white">
					<CardContent>
						<form onSubmit={ this.handleSubmit }>
						<div className="d-flex bg-light rounded">
							<IconButton onClick={this.handleGetLocation}>
								<MyLocationIcon fontSize="small" color="primary" />
							</IconButton>
							<div className="input-group">
								<input type="text" className="form-control border-0 my-auto" id="location" onChange={this.handleChange} aria-label="Enter Location" placeholder="Enter Location" />
								<div className="input-group-append">
									<button type="submit" className="btn btn-sm secondaryBgColor">Search</button>
								</div>
							</div>
						</div>
						<div className="d-flex justify-content-between align-items-center pb-4 pt-4">
							<Typography variant="h6" color="secondary">Filters</Typography>
							<Button size="small" variant="outlined" color="secondary" onClick={this.handleClearSearch}>
								<Typography variant="caption">Clear all filters</Typography>
							</Button>
						</div>
						<div className="form-group">
							<Typography variant="caption" className="text-uppercase">Check In Date</Typography>
							<TextField
								onChange={this.handleChange}
								variant="outlined"
								id="checkInDateTime"
								// label="CHECK IN DATE AND TIME"
								InputProps={{inputProps: { min: moment(today).add(1, 'days').format("YYYY-MM-DD") } }}
								fullWidth
								type="date"
								// defaultValue="2017-05-24"
								className="bg-light rounded"
								InputLabelProps={{
									shrink: true,
								}}
							/>
						</div>
						<div className="form-group">
							<Typography variant="caption" className="text-uppercase">Check Out Date</Typography>
							<TextField
								onChange={this.handleChange}
								variant="outlined"
							    id="checkOutDateTime"
							    // label="CHECK OUT DATE AND TIME"
							    fullWidth
							    type="date"
							    // defaultValue="2017-05-24"
							    className="bg-light rounded"
							    InputLabelProps={{
							      shrink: true,
							    }}
							/>
						</div>
						<div className="d-flex justify-content-between py-4">
							<div className="d-flex flex-column mr-2">
								<Typography variant="caption" className="text-uppercase">No. of Adults</Typography>
								<FormControl size="small" fullWidth variant="outlined" className="rounded bg-light">
									{/* <InputLabel id="for-noOfAdult">No of Adults</InputLabel> */}
									<Select
										labelId="noOfAdult"
										id="noOfAdult"
										name="noOfAdult"
										value={this.state.noOfAdult}
										onChange={this.handleSelectChange}
									>
										<MenuItem value={0}>None</MenuItem>
										<MenuItem value={1}>One</MenuItem>
										<MenuItem value={2}>Two</MenuItem>
										<MenuItem value={3}>Three+</MenuItem>
									</Select>
								</FormControl>
							</div>
							<div className="d-flex flex-column">
								<Typography variant="caption" className="text-uppercase">No. of Children</Typography>
								<FormControl size="small" fullWidth variant="outlined" className="rounded bg-light">
									{/* <InputLabel id="for-noOfChildren">No of Children</InputLabel> */}
									<Select
										labelId="noOfChildren"
										id="noOfChildren"
										name="noOfChildren"
										value={this.state.noOfChildren}
										onChange={this.handleSelectChange}
									>
										<MenuItem value={0}>None</MenuItem>
										<MenuItem value={1}>One</MenuItem>
										<MenuItem value={2}>Two</MenuItem>
										<MenuItem value={3}>Three+</MenuItem>
									</Select>
								</FormControl>
							</div>
						</div>
						<Typography variant="caption" className="text-uppercase">Price per day</Typography>
						<Slider
							defaultValue={500}
							color="secondary"
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
export default GoogleApiWrapper({
	apiKey: "AIzaSyAKZWv-ybYGdH6WZbOftXfLnQ4RPvIU1U8"
})(SideSearchPane);