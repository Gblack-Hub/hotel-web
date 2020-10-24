import React, { Component } from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LocationOnIcon from '@material-ui/icons/LocationOn';

class Hotels extends Component {
	state = {
		data: [
			{ image: 'HotelIcon', location: 'Lagos', country: 'Nigeria', likes: '120,888'},
			{ image: 'HotelIcon', location: 'Ogun', country: 'Nigeria', likes: '110,008'},
			{ image: 'HotelIcon', location: 'Abuja', country: 'Nigeria', likes: '90,243'},
			{ image: 'HotelIcon', location: 'Kaduna', country: 'Nigeria', likes: '140,765'},
			{ image: 'HotelIcon', location: 'Ogun', country: 'Nigeria', likes: '110,008'},
			{ image: 'HotelIcon', location: 'Lagos', country: 'Nigeria', likes: '120,888'},
			{ image: 'HotelIcon', location: 'Kaduna', country: 'Nigeria', likes: '140,765'},
			{ image: 'HotelIcon', location: 'Abuja', country: 'Nigeria', likes: '90,243'}
		],
		hotels: [],
	}

	componentDidMount=()=>{
		this._isMounted = true;

		axios.get('https://quickstays.azurewebsites.net/api/v1/hotels?size=10&start=2020-10-24&end=2020-10-25')
	   .then(res => {
	   	if (this._isMounted) {
		   	// console.log(res.data.body.data);
		   	this.setState({hotels: res.data.body.data});
		   	console.log(this.state.hotels);
	   	}
	   })
	}
	componentWillUnmount() {
   	this._isMounted = false;
	}
	
	render(){
		return (
			<div className="container py-5">
				<div className="row mb-4">
					<div className="col-12">
						<div className="d-flex justify-content-between align-items-center">
							<Typography>Enjoy Quick stay all over Nigeria</Typography>
							<Button variant="contained" disableElevation>See All</Button>
						</div>
					</div>
				</div>
				<div className="row">
					{ this.state.hotels.map((item, index) => (
						<div className="col-sm-12 col-md-4 col-lg-3 col-xl-3 mb-4" key={index}>
							<Card>
						      <CardActionArea>
									<CardMedia
									 component="img"
									 alt={item.address.country}
									 height="140"
									 image={item.images.url}
									 title={item.address.country}
									/>
						        	<CardContent>
										<Typography gutterBottom variant="body2">
											{ item.address.city }
										</Typography>
										<div className="d-flex justify-content-between">
											<div>
												<LocationOnIcon fontSize="small" /><Typography variant="caption">{ item.address.countryFull }</Typography>
											</div>
											{/*<Typography variant="caption">{item.starRating} stars</Typography>*/}
										</div>
						        	</CardContent>
						      </CardActionArea>
						   </Card>
						</div>
					))}
				</div>
			</div>
		);
	}
}
export default Hotels;