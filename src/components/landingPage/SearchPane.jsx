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

	// displayDataNotCompleteAlert=()=>{
	// 	this.setState({this.})
	// }

	// const handleGetLatLong = () => {}

	// handleClose = (event, reason) => {
 //    if (reason === 'clickaway') {
 //      return;
 //    }

 //    this.setState({isDataNotComplete: false});
 //  	}

	// handleChange = (e) => {
	// 	this.setState({ [e.target.id]: e.target.value })
	// }
 	// handleSelectChange =(e)=> {
	// 	this.setState({ [e.target.name]: e.target.value })
	// }
	const handleBlur=()=>{
		console.log('here')
	}

	
	const SearchPane =()=> {
		// const { classes } = this.props;

		const [latitude, setLatitude] = React.useState(38.736946);
		const [longitude, setLongitude] = React.useState(-9.142685);
		const [location, setLocation] = React.useState("");
		const [noOfChildren, setNoOfChildren] = React.useState(0);
		const [noOfAdult, setNoOfAdult] = React.useState(0);
		const [checkInDateTime, setCheckInDateTime] = React.useState("");
		const [checkOutDateTime, setCheckOutDateTime] = React.useState("");
		const [data, setData] = React.useState(null);
		const [isDataNotComplete, setIsDataNotComplete] = React.useState(true);
		const [isNotError, setIsNotError] = React.useState(false);

		const handleGetLocation = () => {
			window.navigator.geolocation.getCurrentPosition(
			 success => this.setState({ latitude: success.coords.latitude, longitude: success.coords.longitude }, () => {
				console.log('Latitide: ', latitude);
				console.log('Longitude: ', longitude);	
	
				Geocode.setApiKey("AIzaSyC00L07VTlenchjOPLk1lY0hVAK-Rih0go");
				Geocode.fromLatLng(this.state.latitude, this.state.longitude).then(
					response => {
					const address = response.results[0].formatted_address;
					console.log(address);
					setLocation(address)
					// this.setState({location : address})
					},
					error => {
						console.error(error);
					}
				);
			 })
			 // error=> console.log(error);
			 );
			
		}

		const handleSubmit = async (e) => {
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

	   	const adults = [
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
		const children = [
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
	//    	const validationSchema = yup.object().shape({
	// 	noOfAdults:  yup.string().required("Select No of Adults"),
	// 	noOfChildren:  yup.string().required("Select No of Children"), 
	// 	checkInDateTime: yup.date().required("Required").test('start', () => {  return yup.date().min(today) }),
	// 	checkOutDateTime: yup.date().min(yup.ref('checkInDateTime'),
    //     "Check out date can't be before Check in date").required("Required"),
	// 	location: yup.string().required("Required"),
	//   });

		return (
			<div className="container-fluid searchPaneBackground">
				{/* <Formik
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
					}) =>( */}
			
					<form autoComplete="off" onSubmit={handleSubmit}>
					<div className="py-2 row justify-content-center align-items-center">
			        	<div className="mb-2 col-sm-12 col-md-4 col-lg-3 col-xl-3">
					      <div className="d-flex align-items-center justify-content-between">
				        		<div className="pr-1">
					        		<IconButton className="text-white" onClick={handleGetLocation}>
					        			<MyLocationIcon fontSize="large" />
					        		</IconButton>
				        		</div>
					        	<CssTextField 
									// FormHelperTextProps={{className:classes.errortext}}
									id="location"
									size="small"
									name="location"
									// value={values.location}
									// helperText={touched.location ? errors.location : ""}
									// error={touched.location && Boolean(errors.location)}
									onChange={e => setLocation(e.target.value)}
									onBlur={handleBlur}
									fullWidth
									label="Enter Location"
									variant="filled"
								/>
					      </div>
					   	</div>
			        	<div className="mb-2 col-sm-12 col-md-4 col-lg-3 col-xl-2">
							<CssTextField  
								// className= {classes.input}
								// FormHelperTextProps={{className:classes.errortext}}
				         		variant="filled"
								id="checkInDateTime"
								name="checkInDateTime"
								label="Check in Date"
								size="small"
								// helperText={touched.checkInDateTime ? errors.checkInDateTime : ""}
								// error={touched.checkInDateTime && Boolean(errors.checkInDateTime)}
								InputProps={{inputProps: { min: moment(today).add(1, 'days').format("YYYY-MM-DD") } }}
							    fullWidth
							   	onBlur={handleBlur}
								onChange={e => setCheckInDateTime(e.target.value)}
							    type="date"
							    InputLabelProps={{
								  shrink: true,
							    }}
							/>
			        	</div>
			        	<div className="mb-2 col-sm-12 col-md-4 col-lg-3 col-xl-2">
				         <CssTextField 
						 	// FormHelperTextProps={{className:classes.errortext}}
				         	variant="filled"
							id="checkOutDateTime"
							name="checkOutDateTime"
							label="Check out Date"
							// helperText={touched.checkOutDateTime ? errors.checkOutDateTime : ""}
							// error={touched.checkOutDateTime && Boolean(errors.checkOutDateTime)} 
							size="small"
							fullWidth
							onChange={e => setCheckOutDateTime(e.target.value)}
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
											// FormHelperTextProps={{className:classes.errortext}}
											select
											variant="filled"
											size="small" 
											label="No of Adults"										
											id="noOfAdults"
											name="noOfAdults"
											// value={values.noOfAdults}
											onChange={e => setNoOfAdult(e.target.value)}
											onBlur={handleBlur}
											// helperText={touched.noOfAdults ? errors.noOfAdults : ""}
											// error={touched.noOfAdults && Boolean(errors.noOfAdults)} 
											
										>
											{adults.map(option => (
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
										// FormHelperTextProps={{className:classes.errortext}}
										variant="filled"
										size="small" 
										label="No of Children"
										id="noOfChildren"
										name="noOfChildren"
										// value={values.noOfChildren}
										onChange={e => setNoOfChildren(e.target.value)}
										onBlur={handleBlur}
										// helperText={touched.noOfChildren ? errors.noOfChildren : ""}
										// error={touched.noOfChildren && Boolean(errors.noOfChildren)}
									>
										{children.map(option => (
											<MenuItem key={option.value} value={option.value}>
											{option.label}
											</MenuItem>			
											))}	
									</CssTextField >
								</FormControl>
				        	</div>
				      	
			        	<div className="mb-2 text-center col-sm-12 col-md-4 col-lg-2 col-xl-1">
							<Button variant="contained" type="submit" size="large" color="secondary" fullWidth className="text-white">Search</Button>
			       		</div>
			      	</div>
		      		</form>
				{/* )}
				</Formik> */}
		   </div>
		);
	}

export default withRouter((withStyles(styles)(SearchPane)));