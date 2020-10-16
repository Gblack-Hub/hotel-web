import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LocationOnIcon from '@material-ui/icons/LocationOn';

class HotelsTopList extends Component {
	state = {
		data: [
			{ image: 'HotelIcon', location: 'Lagos', country: 'Nigeria', likes: '120,888'},
			{ image: 'HotelIcon', location: 'Ogun', country: 'Nigeria', likes: '110,008'},
			{ image: 'HotelIcon', location: 'Abuja', country: 'Nigeria', likes: '90,243'},
			{ image: 'HotelIcon', location: 'Kaduna', country: 'Nigeria', likes: '140,765'}
		]
	}
	render(){
		return (
			<div className="container py-5">
				<div className="row mb-4">
					<div classname="col-12">
						<div className="d-flex justify-content-between align-items-center">
							<Typography>Enjoy Quick stay all over Nigeria</Typography>
							<Button variant="contained">See All</Button>
						</div>
					</div>
				</div>
				<div className="row">
					{ this.state.data.map((item, index) => (
						<div className="col-sm-12 col-md-12 col-lg-3 col-xl-3" key={index}>
							<Card>
						      <CardActionArea>
									<CardMedia
									 component="img"
									 alt={item.location}
									 height="140"
									 image={require("../assets/images/img3.jpg")}
									 title={item.location}
									/>
						        	<CardContent>
										<Typography gutterBottom variant="body2" component="body2">
											{ item.location }
										</Typography>
										<Typography variant="body2" color="textSecondary" component="p">
											<LocationOnIcon fontSize="small" />{ item.country } {item.likes} likes
										</Typography>
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
export default HotelsTopList;