import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import { withRouter, Redirect /*, NavLink */} from 'react-router-dom';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import MyLocationIcon from '@material-ui/icons/MyLocation';
// import Snackbar from '@material-ui/core/Snackbar';
// import Alert from '@material-ui/lab/Alert';
// import CloseIcon from '@material-ui/icons/Close';


class SearchPane extends Component {
	state = {
		latitude: 38.736946,
		longitude: -9.142685,
		location: "",
		// noOfChildren: 0,
		// noOfAdults: 0,
		checkInDateTime: "",
		checkOutDateTime: "",
		size: 3,
		data: null,
		isDataNotComplete: true,
		isNotError: false
	}

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
	// displayDataNotCompleteAlert=()=>{
	// 	this.setState({this.})
	// }
	handleGetLatLong = () => {

	}
	// handleClose = (event, reason) => {
 //    if (reason === 'clickaway') {
 //      return;
 //    }

 //    this.setState({isDataNotComplete: false});
 //  	}
	handleChange = (e) => {
		this.setState({ [e.target.id]: e.target.value })
		// console.log(this.state)
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({
			data: {
				location: this.state.location,
				latitude: this.state.latitude,
				longitude: this.state.longitude,
				// noOfChildren: this.state.noOfChildren,
				// noOfAdults: this.state.noOfAdults,
				start: moment(this.state.checkInDateTime).format("YYYY-MM-DD"),
				end: moment(this.state.checkOutDateTime).format("YYYY-MM-DD"),
				size: this.state.size,
			}
		}, ()=>{
			if(this.state.longitude == "" || this.state.latitude == ""){
				this.setState({ isDataNotComplete: true });
				console.log(this.state.isDataNotComplete);
			} else {
				this.props.history.push({ 
				 pathname: '/hotels',
				 state: { searchData: this.state.data }
				});
				this.setState({ isDataNotComplete: false, isNotError: true });
			}
			// this.fetchData();
		})
		// this.props.history.push('/hotels')
	}
	// fetchData= async ()=> {
	// 	try {
	// 		const res = await axios.post("https://quickstays.azurewebsites.net/api/v1/hotels", this.state.data);
	// 		console.log(res);
	// 	} catch(err) {
	// 		console.log(err);
	// 	}
	// }
	// componentDidUpdate(prevProps, prevState) {
	// 	if (prevState.start !== this.state.start) {
	// 		// console.log(prevProps)
	// 		console.log(prevState)
	// 		console.log(this.state)
	// 		// this.fetchData(this.props.userID);
	// 	}
 //  	}

	render() {
	   // if (this.state.isNotError === true) {
	   //    return <Redirect 
	   //    			to={{
	   //    				pathname: '/hotels',
	   //    				state: { searchData: this.state.data }
	   //    			}}
	   //    		/>
	   // }

		return (
			<div className="container-fluid">
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
					<div className="row justify-content-center align-items-center py-3 px-2">
			        	<div className="col-sm-12 col-md-4 col-lg-3 col-xl-3 mb-3">
					      <div className="d-flex align-items-center justify-content-between">
				        		<div className="pr-1">
					        		<IconButton color="primary" onClick={this.handleGetLocation}>
					        			<MyLocationIcon />
					        		</IconButton>
				        		</div>
					        	<TextField id="location" size="small" onChange={this.handleChange} fullWidth label="Enter Location" className="d-block" variant="outlined" />
					      </div>
					   </div>
			        	<div className="col-sm-12 col-md-4 col-lg-3 col-xl-3 mb-3">
				         <TextField
				         	variant="outlined"
							    id="checkInDateTime"
							    label="Check in Date and Time"
							    size="small"
							    fullWidth
							    required
							    onChange={this.handleChange}
							    type="date"
							    // defaultValue="2020-10-23"
							    className="d-block"
							    InputLabelProps={{
							      shrink: true,
							    }}
							/>
			        	</div>
			        	<div className="col-sm-12 col-md-4 col-lg-3 col-xl-3 mb-3">
				         <TextField
				         	variant="outlined"
							    id="checkOutDateTime"
							    label="Check out Date and Time"
							    size="small"
							    fullWidth
							    required
							    onChange={this.handleChange}
							    type="date"
							    // defaultValue="2020-10-25"
							    className="d-block"
							    InputLabelProps={{
							      shrink: true,
							    }}
							/>
			        	</div>
			        	<div className="col-sm-12 col-md-4 col-lg-3 col-xl-3 mb-3 d-flex">
				        	<div className="flex-fill mr-1">
					         <FormControl size="small" fullWidth variant="outlined">
									<InputLabel id="forNoOfAdults">No of Adults</InputLabel>
									<Select
										labelId="noOfAdults"
										id="noOfAdults"
										value={this.state.noOfAdults}
										onChange={this.handleChange}
										label="No Of Adults"
									>
										<MenuItem value="">
											<em>None</em>
										</MenuItem>
										<MenuItem value={1}>One</MenuItem>
										<MenuItem value={2}>Two</MenuItem>
										<MenuItem value={3}>Three</MenuItem>
									</Select>
						      </FormControl>
				        	</div>
				        	<div className="flex-fill ml-1">
								<FormControl size="small" fullWidth variant="outlined">
									<InputLabel id="forNoOfChildren">No of Children</InputLabel>
									<Select
										labelId="noOfChildren"
										id="noOfChildren"
										value={this.state.noOfChildren}
										onChange={this.handleChange}
										label="Age"
									>
										<MenuItem value="">
											<em>None</em>
										</MenuItem>
										<MenuItem value={1}>1</MenuItem>
										<MenuItem value={2}>2</MenuItem>
										<MenuItem value={3}>3</MenuItem>
									</Select>
								</FormControl>
				        	</div>
				      </div>
			        	<div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 text-center">
				        	<Button variant="contained" type="submit" size="large" color="primary">Search</Button>
			       	</div>
			      </div>
		      </form>
		   </div>
		);
	}
}

export default withRouter(SearchPane);