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

const marks = [
  {
    value: 500,
    label: 'N500/hr',
  },
  {
    value: 1000,
    label: 'N1000/hr',
  },
  {
    value: 2000,
    label: 'N2000/hr',
  },
  {
    value: 3000,
    label: 'N3000/hr',
  },
  {
    value: 4000,
    label: 'N4000/hr',
  },
  {
    value: 5000,
    label: 'N5000/hr',
  },
];

function valuetext(value) {
  return `N${value}/hr`;
}

export default function SideSearchPane(){
	const [value, setValue] = React.useState(30);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<div>
			<Card>
				<CardContent>
					Map Here
				</CardContent>
			</Card>
			<Card className="d-block mt-2">
				<CardContent>
					<div className="input-group">
					  <div className="input-group-prepend my-auto mr-2">
					    <MyLocationIcon />
					  </div>
					  <input type="text" className="form-control" aria-label="Enter Location" placeholder="Enter Location" />
					  <div className="input-group-append">
					    <button className="btn btn-primary">Search</button>
					  </div>
					</div>
					<div className="d-flex justify-content-between align-items-center pb-4 pt-4">
						<div>Filters</div>
						<Button size="small" variant="outlined" className="btn btn-outline-primary">Clear all filters</Button>
					</div>
					{/*<Typography variant="body1">Check In Date and Time</Typography>*/}
					<TextField
						 variant="outlined"
					    id="datetime-local"
					    label="CHECK IN DATE AND TIME"
					    type="datetime-local"
					    defaultValue="2017-05-24T10:30"
					    className="d-block"
					    InputLabelProps={{
					      shrink: true,
					    }}
					/>
					<div className="d-flex justify-content-between py-4">
						<div className="d-flex flex-column mr-2">
							{/*<Typography variant="body1" className="text-uppercase">No. of Adults</Typography>*/}
							<TextField
								 variant="outlined"
								 label="NO OF ADULTS"
							    id="noOfAdults"
							    className="d-block"
							    InputLabelProps={{
							      shrink: true,
							    }}
							/>
						</div>
						<div className="d-flex flex-column">
							{/*<Typography variant="body1" className="text-uppercase">No. of Children</Typography>*/}
							<TextField
								 variant="outlined"
								 label="NO OF CHILDREN"
							    id="noOfChildren"
							    className="d-block"
							    InputLabelProps={{
							      shrink: true,
							    }}
							/>
						</div>
					</div>
					<Typography variant="body1" className="text-uppercase">Price per hour</Typography>
			      <Slider
			        defaultValue={500}
			        getAriaValueText={valuetext}
			        aria-labelledby="price per hour"
			        step={10}
			        valueLabelDisplay="auto"
			        marks={marks}
			        value={value}
			        onChange={handleChange}
			      />
				</CardContent>
			</Card>
		</div>
	);
}