import React, { Component } from 'react';
// import axios from 'axios';
import moment from 'moment';
import { withRouter, /*Redirect, NavLink */} from 'react-router-dom';
import { Formik, useFormikContext } from 'formik'; 
import * as yup from "yup";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import withStyles from "@material-ui/core/styles/withStyles";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import Geocode from "react-geocode";
// import Snackbar from '@material-ui/core/Snackbar';
// import Alert from '@material-ui/lab/Alert';
// import CloseIcon from '@material-ui/icons/Close';

//const today = new Date();
//const {values} = useFormikContext({values})
const styles = theme => ({	
	errortext:{		
			color: "#ff0000",
			lineHeight: 1,
			backgroundColor: "rgba(29, 25, 116, 1)",
			margin: 0,
			paddingLeft:theme.spacing(1),
			paddingTop:theme.spacing(1)		
	},	
   });
   const CssTextField = withStyles({
	root: {
	  '& .MuiInputBase-root': {
		backgroundColor: "#fff"
	  },
	 
	},
  })(TextField);

   class SearchPane extends Component {
	state = {
		latitude: 38.736946,
		longitude: -9.142685,
		location: "",
		noOfChildren: 0,
		noOfAdult: 0,
		checkInDateTime: "",
		checkOutDateTime: "",
		size: 3,
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
	}
 	handleSelectChange =(e)=> {
		this.setState({ [e.target.name]: e.target.value })
	}
	handleChange = (e) => {
		this.setState({ [e.target.id]: e.target.value })
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
		//e.preventDefault();
		this.isFieldComplete();
		// console.log(this.state.noOfAdult, this.state.noOfChildren)

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
				size: this.state.size,
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
		const { classes } = this.props;
		
		// const { startDateNotSet, endDateNotSet, locationNotSet } = this.state;
	   // if (this.state.isNotError === true) {
	   //    return <Redirect 
	   //    			to={{
	   //    				pathname: '/hotels',
	   //    				state: { searchData: this.state.data }
	   //    			}}
	   //    		/>
	   // }
	   const noOfAdults = [
		{
		  value: "1", label:  "1"
		},
		{
		  value: "2", label:  "2"
		},
		{
		  value: "3", label:  "3"
		},
		{
		value: "4+",  label:  "4+"
		}
		];
		const noOfChildren = [
			{
				value: "0", label:  "0"
			},
			{
			  value: "1", label:  "1"
			},
			{
			  value: "2", label:  "2"
			},
			{
			  value: "3", label:  "3"
			},
			{
			value: "4+",  label:  "4+"
			}
			];
		const today = new Date();
	   	const validationSchema = yup.object().shape({
		noOfAdults:  yup.string().required("Select No of Adults"),
		noOfChildren:  yup.string().required("Select No of Children"), 
		checkInDateTime: yup.date().required("Required").test('start', () => {  return yup.date().min(today) }),
		checkOutDateTime: yup.date().min(yup.ref('checkInDateTime'),
        "Check out date can't be before Check in date").required("Required"),
		location: yup.string().required("Required"),
	  });

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
				<Formik
					initialValues={{
						noOfChildren: "",
						noOfAdults: "",
						checkInDateTime: "",
						checkOutDateTime: "",
						location: "",
					}} 
					validationSchema={validationSchema}
					onSubmit= {()=>this.handleSubmit()}
						// this.props.history.push({ 
						//  pathname: '/hotels'})
						//  state: { searchData: this.state.data, guestCount: this.state.noOfAdult + this.state.noOfChildren }
						// })
						
					//}
				>
					 {({
						values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting
					}) =>(
			
					<form autoComplete="off" onSubmit={handleSubmit}>
					<div className="py-2 row justify-content-center align-items-center">
			        	<div className="mb-2 col-sm-12 col-md-4 col-lg-3 col-xl-3">
					      <div className="d-flex align-items-center justify-content-between">
				        		<div className="pr-1">
					        		<IconButton className="text-white" onClick={this.handleGetLocation}>
					        			<MyLocationIcon fontSize="large" />
					        		</IconButton>
				        		</div>
					        	<CssTextField 
									FormHelperTextProps={{className:classes.errortext}}
									id="location"
									size="small"
									name="location"
									value={values.location}
									helperText={touched.location ? errors.location : ""}
									error={touched.location && Boolean(errors.location)}
									onChange={handleChange}
									onBlur={handleBlur}
									fullWidth
									label="Enter Location"
									variant="filled"
								/>
					      </div>
					   	</div>
			        	<div className="mb-2 col-sm-12 col-md-4 col-lg-3 col-xl-2">
							<CssTextField  
								className= {classes.input}
								FormHelperTextProps={{className:classes.errortext}}
				         		variant="filled"
								id="checkInDateTime"
								name="checkInDateTime"
								label="Check in Date"
								size="small"
								helperText={touched.checkInDateTime ? errors.checkInDateTime : ""}
								error={touched.checkInDateTime && Boolean(errors.checkInDateTime)}
								InputProps={{inputProps: { min: moment(today).add(1, 'days').format("YYYY-MM-DD") } }}
							    fullWidth
							   	onBlur={handleBlur}
							    onChange={handleChange}
							    type="date"
							    InputLabelProps={{
								  shrink: true,
							    }}
							/>
			        	</div>
			        	<div className="mb-2 col-sm-12 col-md-4 col-lg-3 col-xl-2">
				         <CssTextField 
						 	FormHelperTextProps={{className:classes.errortext}}
				         	variant="filled"
							id="checkOutDateTime"
							name="checkOutDateTime"
							label="Check out Date"
							helperText={touched.checkOutDateTime ? errors.checkOutDateTime : ""}
							error={touched.checkOutDateTime && Boolean(errors.checkOutDateTime)} 
							size="small"
							fullWidth
							onChange={handleChange}
							onBlur={handleBlur}
							type="date"
							className="rounded bg-light"
							InputLabelProps={{
								shrink: true,
							}}
						/>
			        	</div>
			        	<div className="mb-2 col-sm-12 col-md-4 col-lg-3 col-xl-2">
				        	{/* <div className="mr-2 flex-fill mb-2 col-sm-12 col-md-4 col-lg-3 col-xl-3 "> */}
								<FormControl size="small" fullWidth variant="filled" className="rounded bg-light">
										<CssTextField 
											FormHelperTextProps={{className:classes.errortext}}
											select
											variant="filled"
											size="small" 
											label="No of Adults"										
											id="noOfAdults"
											name="noOfAdults"
											value={values.noOfAdults}
											onChange={handleChange}
											onBlur={handleBlur}
											helperText={touched.noOfAdults ? errors.noOfAdults : ""}
											error={touched.noOfAdults && Boolean(errors.noOfAdults)} 
											
										>
											{noOfAdults.map(option => (
												<MenuItem key={option.value} value={option.value}>
												{option.label}
												</MenuItem>
											))}
									</CssTextField >
								
								</FormControl>
				        	</div>
				        	<div className=" mb-2 col-sm-12 col-md-4 col-lg-3 col-xl-2 ">
								<FormControl size="small" fullWidth variant="filled" className="rounded bg-light">
									
									<CssTextField 
									select
										FormHelperTextProps={{className:classes.errortext}}
										variant="filled"
										size="small" 
										label="No of Children"
										id="noOfChildren"
										name="noOfChildren"
										value={values.noOfChildren}
										onChange={handleChange}
										onBlur={handleBlur}
										helperText={touched.noOfChildren ? errors.noOfChildren : ""}
										error={touched.noOfChildren && Boolean(errors.noOfChildren)} 		
												
									>
										{noOfChildren.map(option => (
											<MenuItem key={option.value} value={option.value}>
											{option.label}
											</MenuItem>			
											))}	
									</CssTextField >
								</FormControl>
				        	</div>
				      	
			        	<div className="mb-2 text-center col-sm-12 col-md-4 col-lg-2 col-xl-1">
							<Button variant="contained" type="submit" size="large" color="secondary" fullWidth className="text-white" 
							disabled={isSubmitting}>Search</Button>
			       		</div>
			      	</div>
		      		</form>
				)}
				</Formik>
		   </div>
		);
	}
}

export default withRouter((withStyles(styles)(SearchPane)));