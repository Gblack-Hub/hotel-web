import React, { Component } from 'react';
import axios from 'axios';
import Overview from './hotelDetail/Overview.jsx';
import Facilities from './hotelDetail/Facilities.jsx';
import Rooms from './hotelDetail/Rooms.jsx';
import Reviews from './hotelDetail/Reviews.jsx';

import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
// import StarHalfIcon from '@material-ui/icons/StarHalf';

function TabContainer(props) {
  return (
    <Typography component="div" className="p-2">
      {props.children}
    </Typography>
  );
}


class HotelDetail extends Component {
	state = {
		activeTabIndex: 0,
		hotelData: {},
	}

	componentDidMount(){
		let id = this.props.match.params.hotel_id;
		let searchData = this.props.location.searchData;
		console.log(this.props.location)
		console.log(searchData)
		if(searchData !== undefined){
			let data = {
				start: searchData.start,
				end: searchData.end,
				guestCount: searchData.guestCount
			}
			this.fetchData(id, data);
		} else {	
			this.handleBackButton();
		}
	}
	gotoRooms=()=>{
		this.setState({ activeTabIndex: 2 }, console.log(this.state.activeTabIndex));
	}
	fetchData=(id, data)=>{
		console.log(data)
		axios.get(`https://quickstays.azurewebsites.net/api/v1/hotels/${id}`, {params: data})
		.then(res => {
		   console.log(res.data.data);
		   this.setState({ hotelData: res.data.data });
		})
		.catch(error => {
			console.log(error);
		}) 
	}

	// const [value, setValue] = React.useState(0);
	handleTabChange = (event, value) => {
	 this.setState({ activeTabIndex: value });
	}
	handleBackButton = () => {
		this.props.history.goBack()
	}

	render(){
		const { activeTabIndex, hotelData } = this.state;
		const { searchData } = this.props.location;

		// const { hotel_id } = this.props.match.params;
		return (
			<div className="container-fluid mt-3">
				<div className="row">
					<div className="col-12">
						<Button size="small" disableElevation onClick={this.handleBackButton}>
							<KeyboardBackspaceIcon fontSize="small" color="primary" /> <Typography color="primary" variant="caption" component="span">Back To Search Result</Typography>
						</Button>
						<div className="row justify-content-between pt-2 pb-3">
							<div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column mb-2">
								<Typography variant="h5">{hotelData.name}</Typography>
								<div className="d-flex">
									{ hotelData.starRating === "5.0" ?
									 	<div>
									 		<StarIcon fontSize="small" color="secondary" />
											<StarIcon fontSize="small" color="secondary" />
											<StarIcon fontSize="small" color="secondary" />
											<StarIcon fontSize="small" color="secondary" />
											<StarIcon fontSize="small" color="secondary" />
									 	</div> :
										hotelData.starRating === "4.0" ?
										<div>
											<StarIcon fontSize="small" color="secondary" />
											<StarIcon fontSize="small" color="secondary" />
											<StarIcon fontSize="small" color="secondary" />
											<StarIcon fontSize="small" color="secondary" />
											<StarBorderIcon fontSize="small" color="secondary" />
										</div> :
										hotelData.starRating === "3.0" ? 
										<div>
											<StarIcon fontSize="small" color="secondary" />
											<StarIcon fontSize="small" color="secondary" />
											<StarIcon fontSize="small" color="secondary" />
											<StarBorderIcon fontSize="small" color="secondary" />
											<StarBorderIcon fontSize="small" color="secondary" />
										</div> : 
										hotelData.starRating === "2.0" ? 
										<div>
											<StarIcon fontSize="small" color="secondary" />
											<StarIcon fontSize="small" color="secondary" />
											<StarBorderIcon fontSize="small" color="secondary" />
											<StarBorderIcon fontSize="small" color="secondary" />
											<StarBorderIcon fontSize="small" color="secondary" />
										</div> : 
										hotelData.starRating === "1.0" ? 
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
							</div>
							<div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
								<Button variant="contained" color="secondary" onClick={this.gotoRooms} disableElevation>Reserve Now</Button>
							</div>
						</div>
						<Paper square>
						  <Tabs
						  		value={this.state.activeTabIndex}
						  		onChange={this.handleTabChange}
						  		aria-label="Hotel Detail Tab"
						  		indicatorColor="primary"
				            	textColor="primary"
				            	variant="scrollable"
          						scrollButtons="auto"
				         >
						    <Tab label="Available Rooms" />
						    <Tab label="Overview" />
						    <Tab label="Facilities" />
						    <Tab label="Reviews" />
						  </Tabs>
						</Paper>
						{ activeTabIndex === 0 && <TabContainer><Rooms { ...hotelData } searchData={searchData} /></TabContainer> }
						{ activeTabIndex === 1 && <TabContainer><Overview { ...hotelData } /></TabContainer> }
						{ activeTabIndex === 2 && <TabContainer><Facilities { ...hotelData } /></TabContainer> }
						{ activeTabIndex === 3 && <TabContainer><Reviews { ...hotelData } /></TabContainer> }
					</div>
				</div>
			</div>
		);
	}
}
export default HotelDetail;