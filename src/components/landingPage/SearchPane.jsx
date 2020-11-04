import React, { Component } from 'react';
// import axios from 'axios';
import moment from 'moment';
import { withRouter, /*Redirect, NavLink */} from 'react-router-dom';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import Geocode from "react-geocode";
// import Snackbar from '@material-ui/core/Snackbar';
// import Alert from '@material-ui/lab/Alert';
// import CloseIcon from '@material-ui/icons/Close';

class SearchPane extends Component {
	state = {
		latitude: 38.736946,
		longitude: -9.142685,
		location: "",
		noOfChildren: 0,
		noOfAdult: 0,
		checkInDateTime: "",
		checkOutDateTime: "",
		// size: 3,
		data: null,
		isDataNotComplete: true,
		isNotError: false,
		startDateNotSet: false,
		endDateNotSet: false,
		locationNotSet: false,
	}

	handleGetLocation = () => {
		window.navigator.geolocation.getCurrentPosition(
         success => this.setState({ latitude: success.coords.latitude, longitude: success.coords.longitude }, () => {
			console.log('Latitide: ', this.state.latitude);
			console.log('Longitude: ', this.state.longitude);	

			Geocode.setApiKey("AIzaSyC00L07VTlenchjOPLk1lY0hVAK-Rih0go");
			Geocode.fromLatLng(this.state.latitude, this.state.longitude).then(
				response => {
				const address = response.results[0].formatted_address;
				console.log(address);
				this.setState({location : address})
				},
				error => {
				console.error(error);
				}
			);
		 })
         // error=> console.log(error);
     	);
		
	}
	// displayDataNotCompleteAlert=()=>{
	// 	this.setState({this.})
	// }
	handleGetLatLong = () => {}
	// handleClose = (event, reason) => {
 //    if (reason === 'clickaway') {
 //      return;
 //    }

 //    this.setState({isDataNotComplete: false});
 //  	}
 	handleSelectChange =(e)=> {
		this.setState({ [e.target.name]: e.target.value })
	}
	handleChange = (e) => {
		this.setState({ [e.target.id]: e.target.value })
		console.log(e.target.value)
	}
	isFieldComplete=()=>{
		if(this.state.checkInDateTime === ""){
			this.setState({ startDateNotSet: true });
		}
		if(this.state.checkOutDateTime === ""){
			this.setState({ endDateNotSet: true });
		}
		if(this.state.location === "" || (this.state.latitude === "" && this.state.longitude === "")){
			this.setState({ locationNotSet: true });
		}
		// if(this.state.startDateNotSet === false && this.state.endDateNotSet === false && this.state.locationNotSet === false){
		// 	return true;
		// }
	}
	handleSubmit = async (e) => {
		e.preventDefault();
		this.isFieldComplete();
		console.log(this.state.noOfAdult, this.state.noOfChildren)

		// console.log(this.state.startDateNotSet)
		// console.log(this.state.endDateNotSet)
		// console.log(this.state.locationNotSet)
		// console.log(this.state)

		this.setState({
			data: {
				location: this.state.location,
				latitude: this.state.latitude,
				longitude: this.state.longitude,
				start: moment(this.state.checkInDateTime).format("YYYY-MM-DD"),
				end: moment(this.state.checkOutDateTime).format("YYYY-MM-DD"),
				// size: this.state.size,
			}
		}, ()=>{
			if(this.state.longitude === "" || this.state.latitude === ""){
				this.setState({ isDataNotComplete: true });
				console.log(this.state.isDataNotComplete);
			} else {
				this.props.history.push({ 
				 pathname: '/hotels',
				 state: { searchData: this.state.data, guestCount: this.state.noOfAdult + this.state.noOfChildren }
				});
				this.setState({ isDataNotComplete: false, isNotError: true });
			}
		})
	}
	render() {
		const { startDateNotSet, endDateNotSet, locationNotSet } = this.state;
	   // if (this.state.isNotError === true) {
	   //    return <Redirect 
	   //    			to={{
	   //    				pathname: '/hotels',
	   //    				state: { searchData: this.state.data }
	   //    			}}
	   //    		/>
	   // }

		return (
			<div className="container-fluid searchPaneBackground">
				{/*<Snackbar
					open={this.state.isDataNotComplete}
					autoHideDuration={3000}
					onClose={this.handleClose}
					action={
						<React.Fragment>
			            <IconButton size="small" aria-label="close" color="inherit" onClick={this.handleClose}>
			              <CloseIcon fontSize="small" />
			            </IconButton>
			         </React.Fragment>
		        	}
					>
					<Alert variant="filled" severity="error">
			        Please enter a location
			      </Alert>
				</Snackbar>*/}
				<form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
					<div className="py-2 row justify-content-center align-items-center">
			        	<div className="mb-2 col-sm-12 col-md-4 col-lg-3 col-xl-3">
					      <div className="d-flex align-items-center justify-content-between">
				        		<div className="pr-1">
					        		<IconButton className="text-white" onClick={this.handleGetLocation}>
					        			<MyLocationIcon fontSize="large" />
					        		</IconButton>
				        		</div>
					        	<TextField
									id="location"
									size="small"
									value={this.state.location}
									error={locationNotSet}
									helperText={ locationNotSet && "*this field is required"}
									onChange={this.handleChange}
									fullWidth
									label="Enter Location"
									className="rounded bg-light"
									variant="filled"
								/>
					      </div>
					   	</div>
			        	<div className="mb-2 col-sm-12 col-md-4 col-lg-3 col-xl-2">
				        	<TextField
				         		variant="filled"
							    id="checkInDateTime"
								label="Check in Date and Time"
								error={startDateNotSet}
								helperText={ startDateNotSet && "*this field is required"}
							    size="small"
							    fullWidth
							    required
							    onChange={this.handleChange}
							    type="date"
							    className="rounded bg-light"
							    InputLabelProps={{
							      shrink: true,
							    }}
							/>
			        	</div>
			        	<div className="mb-2 col-sm-12 col-md-4 col-lg-3 col-xl-2">
				         <TextField
				         	variant="filled"
							id="checkOutDateTime"
							label="Check out Date and Time"
							error={endDateNotSet}
							helperText={ endDateNotSet && "*this field is required"}
							size="small"
							fullWidth
							required
							onChange={this.handleChange}
							type="date"
							className="rounded bg-light"
							InputLabelProps={{
								shrink: true,
							}}
						/>
			        	</div>
			        	<div className="mb-2 col-sm-12 col-md-4 col-lg-3 col-xl-3 d-flex align-items-center">
				        	<div className="mr-1 flex-fill">
								<FormControl size="small" fullWidth variant="filled" className="rounded bg-light">
									<InputLabel id="for-noOfAdult">No of Adults</InputLabel>
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
				        	<div className="ml-1 flex-fill">
								<FormControl size="small" fullWidth variant="filled" className="rounded bg-light">
									<InputLabel id="for-noOfChildren">No of Children</InputLabel>
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
			        	<div className="mb-2 text-center col-sm-12 col-md-4 col-lg-2 col-xl-2">
				        	<Button variant="contained" type="submit" size="large" color="secondary" fullWidth className="text-white">Search</Button>
			       		</div>
			      	</div>
		      	</form>
		   </div>
		);
	}
}

export default withRouter(SearchPane);