import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link/*, Redirect, Switch */} from 'react-router-dom';

import axios from 'axios';

import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import SideSearchPane from './SideSearchPane.jsx';

	
class HotelList extends Component{
	state = {
		hotels: [],
		searchData: ""
	}
	getSearch=(data)=>{
		console.log(data)
		this.setState({ searchData: data });
	}
	componentDidMount() {
		console.log("Component did mount")
		// console.log(this.props);
		// let searchData = this.props.searchData;
		let data = this.props.location.state.searchData;
		if(typeof(data) === undefined){
			data = {};
		}
		console.log(data);
		this.fetchData(data);
	}
	componentDidUpdate=(prevProps, prevState)=>{
		if(prevState.searchData !== this.state.searchData){
			this.fetchData(this.state.searchData)
		}
	}
	fetchData=(searchData)=>{
		axios.get('https://quickstays.azurewebsites.net/api/v1/hotels/', {
			params: searchData
		})
		.then(res => {
		   console.log(res.data.body.data);
		   this.setState({hotels: res.data.body.data});
		})
		.catch(error => {
			console.log(error);
		}) 
	}
	// React.useEffect(() => {
	// }, []);

	render() {
		return (
			<div className="container-fluid pt-3">
				<div className="row">
					<div className="col-sm-12 col-md-4 col-lg-3 col-xl-3">
						<SideSearchPane onSubmitSearch={this.getSearch} />
					</div>
					<div className="col-sm-12 col-md-8 col-lg-9 col-xl-9">
						{ this.state.hotels.length <= 0 ? 
							<div className="row">
								<div className="col-12 text-center">
									<Paper>
										<Typography variant="h6">Sorry, we couldn't find any hotel that matches your search.</Typography>
									</Paper>
								</div>
							</div>
						:
							<div className="row">
								{ this.state.hotels.map((item, index) => (
								<div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-3" key={index}>
									<Link to={"/hotel/detail/" + item.propertyId}>
										<Card>
									      <CardActionArea>
												<CardMedia
												 component="img"
												 alt={item.location}
												 height="140"
												 image={item.images.url}
												 title={item.location}
												/>
									        	<CardContent>
													<Typography gutterBottom variant="body2">
														{ item.name }
													</Typography>
													<Typography variant="body2" color="textSecondary" component="p">
														{ item.address.city }, { item.address.countryFull }
													</Typography>
													<div className="d-flex align-items-center justify-content-between">
														<div className="d-flex align-items-center">
															<div className="d-flex mr-1">
															{ item.starRating == "5.0" ?
															 	<div>
															 		<StarIcon fontSize="small" color="secondary" />
																	<StarIcon fontSize="small" color="secondary" />
																	<StarIcon fontSize="small" color="secondary" />
																	<StarIcon fontSize="small" color="secondary" />
																	<StarIcon fontSize="small" color="secondary" />
															 	</div> :
																item.starRating == "4.0" ?
																<div>
																	<StarIcon fontSize="small" color="secondary" />
																	<StarIcon fontSize="small" color="secondary" />
																	<StarIcon fontSize="small" color="secondary" />
																	<StarIcon fontSize="small" color="secondary" />
																	<StarBorderIcon fontSize="small" color="secondary" />
																</div> :
																item.starRating == "3.0" ? 
																<div>
																	<StarIcon fontSize="small" color="secondary" />
																	<StarIcon fontSize="small" color="secondary" />
																	<StarIcon fontSize="small" color="secondary" />
																	<StarBorderIcon fontSize="small" color="secondary" />
																	<StarBorderIcon fontSize="small" color="secondary" />
																</div> : 
																item.starRating == "2.0" ? 
																<div>
																	<StarIcon fontSize="small" color="secondary" />
																	<StarIcon fontSize="small" color="secondary" />
																	<StarBorderIcon fontSize="small" color="secondary" />
																	<StarBorderIcon fontSize="small" color="secondary" />
																	<StarBorderIcon fontSize="small" color="secondary" />
																</div> : 
																item.starRating == "1.0" ? 
																<div>
																	<StarIcon fontSize="small" color="secondary" />
																	<StarBorderIcon fontSize="small" color="secondary" />
																	<StarBorderIcon fontSize="small" color="secondary" />
																	<StarBorderIcon fontSize="small" color="secondary" />
																	<StarBorderIcon fontSize="small" color="secondary" />
																</div> : 
																<div>
																	<StarBorderIcon fontSize="small" color="secondary" />
																	<StarBorderIcon fontSize="small" color="secondary" />
																	<StarBorderIcon fontSize="small" color="secondary" />
																	<StarBorderIcon fontSize="small" color="secondary" />
																	<StarBorderIcon fontSize="small" color="secondary" />
																</div>
															}
															</div>
															<div>
																<Typography variant="caption" color="secondary">{ item.starRating }</Typography>
															</div>
														</div>
														<div>
															<Button color="primary" size="small">see all</Button>
														</div>
													</div>
									        	</CardContent>
									      </CardActionArea>
									   </Card>
									</Link>
								</div>
								))}
							</div>
						}
					</div>
				</div>
			</div>
		);
	}
}

export default HotelList;