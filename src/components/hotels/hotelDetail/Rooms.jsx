import React from 'react';
import { /*BrowserRouter as Router, Route,*/ Link/*, Redirect, Switch */} from 'react-router-dom';
//import Carousel from 'react-material-ui-carousel'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { Alert, AlertTitle } from '@material-ui/lab';
import Carousel from 'react-bootstrap/Carousel'
import { CarouselItem } from 'react-bootstrap';

const classes = {
	hidden: {
		display: "-webkit-box",
		WebkitLineClamp: 6,
		overflow: "hidden",
		WebkitBoxOrient: "vertical"
	}
};

class Rooms extends React.PureComponent {
	state = {
		
		isTextHidden: true,
	}
	componentDidMount(){
		console.log(this.props)
	}
	expandText=()=> {
		this.setState({isTextHidden: !this.state.isTextHidden}, console.log(this.state.isTextHidden))
	}
	handleRoomChange=(e)=>{
		this.setState({defaultRoom: e.target.value})
	}
	
	render(){
		const { rooms } = this.props;
		console.log(rooms);
		const { /*defaultRoom,*/ isTextHidden } = this.state;
		return (
			<div className="container-fluid">
				<div className="row">
					{rooms && rooms.map((item, index) => (
						<div className="col-12 mb-5" key={index}>
							<Typography variant="h5">{ item.name }</Typography>
							<div className="d-flex align-items-center mb-3">
								<Typography variant="body1" color="textSecondary" className="mr-2 text-uppercase">From</Typography>
								<Typography variant="body1" className="font-weight-bold">${item.price.amount}</Typography>
							</div>
							<div className="row">
								<div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
									<div className="row">
										<div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-2 order-md-first order-last">
											<div style={ isTextHidden ? classes.hidden : null} className="mb-1">
												{ item.description }
												<Typography variant="body1" className="mt-2">
													In addition, the room includes; &nbsp; 
													{ item.amenities.map((amenities, i) => (
														<span key={i}>{ amenities }, </span>
													))}
												</Typography>
											</div>
											<div className="text-right">
												<Button size="small" color="secondary" onClick={this.expandText }>
													{isTextHidden ? "⬇ More" : "⬆ Less"}
												</Button>
											</div>
											<Divider />
											<div className="d-flex align-items-center py-3">
												<Typography variant="subtitle2" className="text-uppercase">No of Rooms:</Typography>
												<div className="d-flex align-items-center">
													<span className='badge m-2 badge-secondary' color="white" size="large">1</span>
													{/* <Counters 	item={item}
																onIncrement={this.handleIncrementRoom}
																onDecrement={this.handleDecrementRoom}/> */}
													{/* <Button variant="contained" color="primary" size="small" disableElevation onClick={()=>this.handleDecrementRoom(item.index)} 
													 disabled= {this.state.defaultRoom===1}>
														<RemoveIcon />
													</Button>
													
													<input type="text" className="form-control mx-2 px-1 text-center" value={this.state.defaultRoom} onChange={this.handleRoomChange} style={{width: '40px'}} /> */}
													{/* <Button variant="contained" size="small"  color="primary" disableElevation onClick={this.handleIncrementRoom}>
														<AddIcon />
													</Button> */} 
												</div>
											</div>
											<div className="d-flex flex-column">
												{/* <Typography variant="subtitle2" className="text-uppercase">Select No of hours</Typography>
												<div className="d-flex justify-content-between py-3">
													<Button variant="contained" disableElevation color="primary">
														<div className="d-flex flex-column">
															<div>2 hrs</div>
															<Typography color="secondary">N1000</Typography>
														</div>
													</Button>
													<Button variant="contained" disableElevation>
														<div className="d-flex flex-column">
															<div>2 hrs</div>
															<Typography color="secondary">N1000</Typography>
														</div>
													</Button>
													<Button variant="contained" disableElevation>
														<div className="d-flex flex-column">
															<div>2 hrs</div>
															<Typography color="secondary">N1000</Typography>
														</div>
													</Button>
													<Button variant="contained" disableElevation>
														<div className="d-flex flex-column">
															<div>2 hrs</div>
															<Typography color="secondary">N1000</Typography>
														</div>
													</Button>
												</div> */}
												<Link to={{ 
													pathname: "/book_hotel", 
													hotelInfo: { hotel_id: this.props.propertyId,
																hotelName: this.props.name, 
																hotelImage: this.props.images[0].url,
																roomType: item.name,
																roomAmount: item.price.amount,
																start: this.props.searchData.start,
																end: this.props.searchData.end,
																guestCount: this.props.searchData.guestCount,
																room_id: item.id,
																stripeToken: "tok_visa"
																} 
															}}
												>
													<Button variant="contained" color="secondary" size="large" className={classes.button} disableElevation>
														<Typography color="primary">Reserve Now</Typography>
													</Button>
												</Link>
											</div>
										</div>
										<div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-2">
											< Carousel interval="1000">
											
											{item.images.map(e =><CarouselItem> <img src={e.url} className="img-fluid rounded" alt={item.name} style={{height:300, width:500 }} /></CarouselItem>)}
											
											</Carousel>
											
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
					<div className="col-12 mb-5">
						{ rooms && rooms.length === 0 && 
							<Alert severity="info">
								<AlertTitle>Info</AlertTitle>
								Sorry, there is no room that matches your search
							</Alert>
						}
					</div>
				</div>
			</div>
		);
	}
}
export default Rooms;