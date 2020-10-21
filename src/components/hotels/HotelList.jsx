import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link /*, NavLink */} from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';

	
const hotels = [
	{ id: 1, name: 'Napoleon Hotel Roma', image: 'HotelIcon', location: 'Lagos', country: 'Nigeria', star: '3.5', totalRatings: '8000' },
	{ id: 2, name: 'Napoleon Hotel Roma', image: 'HotelIcon', location: 'Ogun', country: 'Nigeria', star: '1', totalRatings: '8000'},
	{ id: 3, name: 'Napoleon Hotel Roma', image: 'HotelIcon', location: 'Abuja', country: 'Nigeria', star: '2', totalRatings: '8000'},
	{ id: 4, name: 'Napoleon Hotel Roma', image: 'HotelIcon', location: 'Kaduna', country: 'Nigeria', star: '1', totalRatings: '8000'},
	{ id: 5, name: 'Napoleon Hotel Roma', image: 'HotelIcon', location: 'Ogun', country: 'Nigeria', star: '5', totalRatings: '8000'},
	{ id: 6, name: 'Napoleon Hotel Roma', image: 'HotelIcon', location: 'Lagos', country: 'Nigeria', star: '3', totalRatings: '8000'},
	{ id: 7, name: 'Napoleon Hotel Roma', image: 'HotelIcon', location: 'Kaduna', country: 'Nigeria', star: '4.5', totalRatings: '8000'},
	{ id: 8, name: 'Napoleon Hotel Roma', image: 'HotelIcon', location: 'Abuja', country: 'Nigeria', star: '5', totalRatings: '8000'}
]
export default function HotelList(){
	return (
		<div className="row pt-3">
			{ hotels.map((item, index) => (
			<div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3" key={index}>
				<Link to={"/hotel/detail/" + item.id}>
					<Card>
				      <CardActionArea>
							<CardMedia
							 component="img"
							 alt={item.location}
							 height="140"
							 image={require("../../assets/images/img3.jpg")}
							 title={item.location}
							/>
				        	<CardContent>
								<Typography gutterBottom variant="body2">
									{ item.name }
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									{ item.location }, { item.country }
								</Typography>
								<div className="d-flex align-items-center justify-content-between">
									<div className="d-flex align-items-center">
										<div className="d-flex mr-1">
											<StarIcon fontSize="small" color="secondary" /><StarIcon fontSize="small" color="secondary" /><StarIcon fontSize="small" color="secondary" /><StarIcon fontSize="small" color="secondary" /><StarHalfIcon fontSize="small" color="secondary" />
										</div>
										<div>
											<Typography variant="caption" color="secondary">{ item.star } from { item.totalRatings }</Typography>
										</div>
									</div>
									<div>
										<Button color="primary" size="small">see all</Button>
									</div>
								</div>
								<div></div>
				        	</CardContent>
				      </CardActionArea>
				   </Card>
				</Link>
			</div>
			))}
		</div>
	);
}