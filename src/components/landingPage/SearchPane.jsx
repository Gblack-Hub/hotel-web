import React, {  useRef } from 'react';
// import axios from 'axios';
import moment from 'moment';
import { useHistory, withRouter, /*Redirect, NavLink */} from 'react-router-dom';
import { Formik } from 'formik'; 
import * as yup from "yup";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import {makeStyles, withStyles} from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import Geocode from "react-geocode";
// import Snackbar from '@material-ui/core/Snackbar';
// import Alert from '@material-ui/lab/Alert';
// import CloseIcon from '@material-ui/icons/Close';

const today = new Date();
const useStyles = makeStyles((theme) => ({	
	errortext:{		
			color: "#ff0000",
			lineHeight: 1,
			backgroundColor: "rgba(29, 25, 116, 1)",
			margin: 0,
			paddingLeft:theme.spacing(1),
			paddingTop:theme.spacing(1)		
	},	
   }));
   const CssTextField = withStyles({
	root: {
	  '& .MuiInputBase-root': {
		backgroundColor: "#fff"
	  },
	 
	},
  })(TextField);
	
	const SearchPane =()=> {
		const classes = useStyles();

		const [coordinate, setCoordinate] = React.useState([{latitude:38.736946, longitude:-9.142685}]);
		const [location, setLocation] = React.useState("");
		

		const handleGetLocation = () => {
				
			window.navigator.geolocation.getCurrentPosition(
			 success => setCoordinate({ latitude: success.coords.latitude, longitude: success.coords.longitude }, () => {
			
			// 	console.log('Longitude: ', coordinate.longitude);	
	
				Geocode.setApiKey("AIzaSyC00L07VTlenchjOPLk1lY0hVAK-Rih0go");
				Geocode.fromLatLng(coordinate.latitude, coordinate.longitude).then(
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
	    const validationSchema = yup.object().shape({
		noOfAdults:  yup.string().required("Select No of Adults"),
		noOfChildren:  yup.string().required("Select No of Children"), 
		checkInDateTime: yup.date().required("Required").test('start', () => {  return yup.date().min(today) }),
		checkOutDateTime: yup.date().min(yup.ref('checkInDateTime'),
        "Check out date can't be before Check in date"),
		location: yup.string().required("Required"),
	  });
	 const history  = useHistory()
	  const initialValues = {
						noOfChildren: "0",
						noOfAdults: "1",
						checkInDateTime: "",
						checkOutDateTime: "",
						location,
						latitude:coordinate.latitude,
						longitude:coordinate.longitude

					};
					const ref = useRef()
					//use ref.current.values to access values outside of the formik tag

		return (
		
			<div className="container-fluid searchPaneBackground">
				<Formik
					innerRef ={ref}
					initialValues={initialValues} 
					validationSchema={validationSchema}
					 onSubmit= 
					 //{handleSubmit}
					{ (values)=>{
						history.push({ 
							pathname: '/hotels',
							state: { searchData:  {	location: values.location,
								latitude: values.latitude,
								longitude: values.longitude,
								start: values.checkInDateTime,
								end: values.checkOutDateTime}, guestCount: values.noOfAdult +values.noOfChildren }
						   }
						)}}
						
				>
					 {({
						values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting
					}) =>(
			
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
								// className= {classes.input}
								FormHelperTextProps={{className:classes.errortext}}
				         		variant="filled"
								id="checkInDateTime"
								name="checkInDateTime"
								label="Check in Date"
								size="small"
								value={values.checkInDateTime}
								helperText={touched.checkInDateTime ? errors.checkInDateTime : ""}
								error={touched.checkInDateTime && Boolean(errors.checkInDateTime)}
								InputProps={{inputProps: { min: moment(today).add(0, 'days').format("YYYY-MM-DD") } }}
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
							value={values.checkOutDateTime}
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
										value={values.noOfChildren}
										onChange={handleChange}
										onBlur={handleBlur}
										helperText={touched.noOfChildren ? errors.noOfChildren : ""}
										error={touched.noOfChildren && Boolean(errors.noOfChildren)}
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
							<Button variant="contained" type="submit" size="large" color="secondary" disabled= {isSubmitting}
							fullWidth className="text-white">Search</Button>
			       		</div>
			      	</div>
		      		</form>
				 )}
				</Formik> 
		   </div>
		);
	}

export default withRouter(SearchPane);