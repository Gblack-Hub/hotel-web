import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link /*, NavLink */} from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
	
const hotels = [
	{ id: 1, image: 'HotelIcon', location: 'Lagos', country: 'Nigeria', likes: '120,888'},
	{ id: 2, image: 'HotelIcon', location: 'Ogun', country: 'Nigeria', likes: '110,008'},
	{ id: 3, image: 'HotelIcon', location: 'Abuja', country: 'Nigeria', likes: '90,243'},
	{ id: 4, image: 'HotelIcon', location: 'Kaduna', country: 'Nigeria', likes: '140,765'},
	{ id: 5, image: 'HotelIcon', location: 'Ogun', country: 'Nigeria', likes: '110,008'},
	{ id: 6, image: 'HotelIcon', location: 'Lagos', country: 'Nigeria', likes: '120,888'},
	{ id: 7, image: 'HotelIcon', location: 'Kaduna', country: 'Nigeria', likes: '140,765'},
	{ id: 8, image: 'HotelIcon', location: 'Abuja', country: 'Nigeria', likes: '90,243'}
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
									{ item.location }
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									{ item.country } {item.likes} likes
								</Typography>
				        	</CardContent>
				      </CardActionArea>
				   </Card>
				</Link>
			</div>
			))}
		</div>
	);
}