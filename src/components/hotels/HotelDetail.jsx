import React, { Component } from 'react';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';

const state = {
	hotel_id: null,
}

export default function HotelDetail(){
	componentDidMount(){
		// console.log(this.props.match.params.hotel_id);
		let id = this.props.match.params.hotel_id;
		setHotelID(id);

	}
	const [value, setHotelID] = React.useState(null);
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<div className="mt-3">
			<Button disableElevation>
				<KeyboardBackspaceIcon color="primary" /> <Typography color="primary" variant="subtitle2" component="span">Back To Search Result</Typography>
			</Button>
			<div className="d-flex justify-content-between">
				<div className="d-flex flex-column">
					<Typography variant="h5">Eko Hotels & Suites {this.state.hotel_id}</Typography>
					<div className="d-flex">
						<StarIcon color="secondary" /><StarIcon color="secondary" /><StarIcon color="secondary" /><StarIcon color="secondary" /><StarHalfIcon color="secondary" />
					</div>
				</div>
				<div>
					<Button variant="contained" color="primary">Book Now</Button>
				</div>
			</div>
			<AppBar position="static">
				<Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
					<Tab label="Item One" {...a11yProps(0)} />
					<Tab label="Item Two" {...a11yProps(1)} />
					<Tab label="Item Three" {...a11yProps(2)} />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0}>
			Item One
			</TabPanel>
			<TabPanel value={value} index={1}>
			Item Two
			</TabPanel>
			<TabPanel value={value} index={2}>
			Item Three
			</TabPanel>
		</div>
	);
}