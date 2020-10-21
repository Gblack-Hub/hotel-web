import React, { Component } from 'react';

import MyLocationIcon from '@material-ui/icons/MyLocation';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


export default function SideSearchPane(){
	const [value, setValue] = React.useState(30);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<div>
			<Card>
				<CardContent>
					
				</CardContent>
			</Card>
			<Card className="d-block">
				<CardContent>
					<div className="input-group mb-3">
					  <div className="input-group-prepend">
					    <MyLocationIcon />
					  </div>
					  <input type="text" className="form-control" aria-label="Enter Location" placeholder="Enter Location" />
					  <div className="input-group-append">
					    <button className="btn btn-primary">Search</button>
					  </div>
					</div>
					<div className="d-flex">
						<div>Filters</div>
						<Button variant="outlined" className="btn btn-outline-primary">Clear all filters</Button>
					</div>
					<div>Check In Date and Time</div>
					<TextField
					    id="datetime-local"
					    label="Next appointment"
					    type="datetime-local"
					    defaultValue="2017-05-24T10:30"
					    className="d-block"
					    InputLabelProps={{
					      shrink: true,
					    }}
					/>
					<div>Check In Date and Time</div>
					<div className="d-flex justify-content-between">
						<div>2 hrs</div>
						<div>4 hrs</div>
						<div>6 hrs</div>
						<div>9 hrs</div>
					</div>
					<div>Text Text Text</div>
					<Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
				</CardContent>
			</Card>
		</div>
	);
}