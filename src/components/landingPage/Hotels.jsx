import React, { Component } from 'react';
// import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import LocationOnIcon from '@material-ui/icons/LocationOn';

class Hotels extends Component {
	state = {
		data: [
			{ image: 'paris', location: 'Paris', country: 'Nigeria', likes: '11,008'},
			{ image: 'berlin', location: 'Berlin', country: 'Berlin', likes: '9,243'},
			{ image: 'st-petersburg', location: 'Saint Petersburg', country: 'Nigeria', likes: '14,765'},
			{ image: 'nigeria', location: 'Nigeria', country: 'Nigeria', likes: '12,888'},
			{ image: 'uk', location: 'UK', country: 'UK', likes: '10,008'},
			{ image: 'budapest', location: 'Budapest', country: 'Nigeria', likes: '15,888'},
			{ image: 'amsterdam', location: 'Amsterdam', country: 'Nigeria', likes: '14,000'},
			{ image: 'rio-de-janeiro', location: 'Rio de Janeiro', country: 'Nigeria', likes: '5,243'}
		],
		hotels: [],
	}

	// componentDidMount=()=>{
	// 	this._isMounted = true;

	// 	axios.get('https://quickstays.azurewebsites.net/api/v1/hotels?size=10&start=2020-10-24&end=2020-10-25')
	//    .then(res => {
	//    	if (this._isMounted) {
	// 	   	// console.log(res.data.body.data);
	// 	   	this.setState({hotels: res.data.body.data});
	// 	   	console.log(this.state.hotels);
	//    	}
	//    })
	// }
	// componentWillUnmount() {
   	// 	this._isMounted = false;
	// }
	
	render(){
		return (
			<div className="container py-5 mt-5">
				<div className="row mb-5">
					<div className="col-12">
						<Typography variant="h5" className="text-center">Enjoy Quikstays all over the world</Typography>
						<div className="text-center">
							<hr style={{width: '100px' }} className="hrColor" />
						</div>
					</div>
				</div>
				<div className="row">
					{ this.state.data.map((item, index) => (
						<div className="col-sm-12 col-md-4 col-lg-3 col-xl-3 mb-4" key={index}>
							<Card>
						      <CardActionArea>
									<CardMedia
									 component="img"
									 alt={item.location}
									 height="140"
									 image={require('../../assets/images/'+item.image+'.png')}
									 title={item.location}
									/>
						        	<CardContent>
										<Typography gutterBottom variant="h6">{ item.location }</Typography>
										<div className="d-flex justify-content-between">
											<div>
												<LocationOnIcon fontSize="small" /><Typography variant="caption">{ item.likes } hotels available</Typography>
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