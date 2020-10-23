import React, { Component } from 'react';
import { Link /*, NavLink */} from 'react-router-dom';
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

	
class HotelList extends Component{
	state = {
		// hotels: [
		// 	{ id: 1, name: 'Napoleon Hotel Roma', image: 'HotelIcon', location: 'Lagos', country: 'Nigeria', star: '3.5', totalRatings: '8000' },
		// 	{ id: 2, name: 'Napoleon Hotel Roma', image: 'HotelIcon', location: 'Ogun', country: 'Nigeria', star: '1', totalRatings: '8000'},
		// 	{ id: 3, name: 'Napoleon Hotel Roma', image: 'HotelIcon', location: 'Abuja', country: 'Nigeria', star: '2', totalRatings: '8000'},
		// 	{ id: 4, name: 'Napoleon Hotel Roma', image: 'HotelIcon', location: 'Kaduna', country: 'Nigeria', star: '1', totalRatings: '8000'},
		// 	{ id: 5, name: 'Napoleon Hotel Roma', image: 'HotelIcon', location: 'Ogun', country: 'Nigeria', star: '5', totalRatings: '8000'},
		// 	{ id: 6, name: 'Napoleon Hotel Roma', image: 'HotelIcon', location: 'Lagos', country: 'Nigeria', star: '3', totalRatings: '8000'},
		// 	{ id: 7, name: 'Napoleon Hotel Roma', image: 'HotelIcon', location: 'Kaduna', country: 'Nigeria', star: '4.5', totalRatings: '8000'},
		// 	{ id: 8, name: 'Napoleon Hotel Roma', image: 'HotelIcon', location: 'Abuja', country: 'Nigeria', star: '5', totalRatings: '8000'}
		// ],
		hotels: [],
	}
	componentDidMount() {
		let searchData = this.props.location.state.searchData;
		if(typeof(searchData) === undefined){
			searchData = [];
		}
		console.log(searchData);
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
			<div className="row pt-3">
				{ this.state.hotels.length <= 0 ? 
					<div className="col-12 text-center">
						<Paper>
							<Typography variant="h6">Sorry, we couldn't find any hotel that matches your search.</Typography>
						</Paper>
					</div>
				:
					<div>
						{ this.state.hotels.map((item, index) => (
						<div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-3" key={index}>
							<Link to={"/hotel/detail/" + item.id}>
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
		);
	}
}

export default HotelList;