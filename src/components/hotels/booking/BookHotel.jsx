import React, { Component } from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
// import StarHalfIcon from '@material-ui/icons/StarHalf';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./payment/stripe/CheckoutForm";
import EditDialog from "./payment/dialog"
// import BookingConfirmation from "./payment/stripe/BookingConfirmation.jsx";

const STRIPE_PUBLISHABLE_KEY = "pk_test_51HXBJrBCeQfqZ7YQTyeOsrTJSU7vCOL1tPHZobPkdXcJbXLB7Dr0LyZ2qEgqRucH2OR7EwAAMve04nnktCfgrwfr00sHxbmm6L";

const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);

axios.defaults.headers.post['Content-Type'] = 'text/plain';

class BookHotel extends Component {
	state = {
		selectedHotel: "",
	
	}
	componentDidMount(){
		console.log(this.props.location.hotelInfo)
		if(this.props.location.hotelInfo === undefined){
			this.props.history.push('/');
			return;
		}
		this.setState({ selectedHotel: this.props.location.hotelInfo });
		
	}
	

	render(){
		const { hotelImage, hotelName, roomType, roomAmount, start} = this.props.location.hotelInfo || {};
		// const { selectedHotel } = this.state;
		const VAT = 210;
		return (
			<div className="container-fluid">
				<div className="row mb-4 mt-2">
					<div className="col-sm-12 col-md-5 col-lg-4 col-xl-4">
						<div className="card mb-4">
							<div className="card-body p-0">
								<div className="d-flex justify-content-between p-2">
									<div className="flex-fill">
										<Typography variant="body1" className="font-weight-bold">{ hotelName }</Typography>
									</div>
									<div className="ml-3">
										<StarIcon fontSize="small" color="secondary" />
										<StarIcon fontSize="small" color="secondary" />
										<StarIcon fontSize="small" color="secondary" />
										<StarIcon fontSize="small" color="secondary" />
										<StarIcon fontSize="small" color="secondary" />
									</div>
								</div>
								<div>
									{ hotelImage && <img src={hotelImage} className="img-fluid" alt="Napoleon Hotel Roma" /> }
								</div>
								<div className="p-2">
									<Typography variant="body1" color="primary" className="font-weight-bold mb-2">{ roomType }</Typography>
									<div className="d-flex justify-content-between mb-2">
										<Typography variant="body2" className="text-uppercase">Check In Date</Typography>
										<div className="d-flex">
											<div className="d-flex flex-column align-items-center mr-2">
												<Typography variant="body2" className="text-uppercase">{start}</Typography>
												<Typography variant="caption" color="textSecondary">FROM 12:00PM</Typography>
											</div>
										</div>
									</div>
									{/* <div className="d-flex justify-content-between mb-2">
										<Typography variant="body2" className="text-uppercase">Check Out Date</Typography>
										<div className="d-flex">
											<div className="d-flex flex-column align-items-center mr-2">
												<Typography variant="body2" className="text-uppercase">FRI, 23 OCT, 2020</Typography>
												<Typography variant="caption" color="textSecondary">FROM 12:00PM</Typography>
											</div>
											<div>
												<IconButton size="small">
													<EditIcon fontSize="small" />
												</IconButton>
											</div>
										</div>
									</div> */}
									{/* <div className="d-flex justify-content-between mb-2">
										<Typography variant="body2" className="text-uppercase">No. of days selected</Typography>
										<div className="d-flex">
											<div className="mr-2">
											<button onClick= {()=>this.handleDecrement()}
											disabled= {this.state.product.quantity===1}
											className="btn m-0 btn-secondary btn-sm">-</button>
											<span className='badge m-2 badge-primary'>{this.state.noOfDays}</span>
											<button onClick= {() => this.handleIncrement()}
											className="btn btn-secondary btn-sm">+</button>
											</div>
										
										</div>
									</div> */}
									<div className="d-flex justify-content-between mb-2">
										<Typography variant="body2" className="text-uppercase">No. of days selected</Typography>
										<div className="d-flex">
											<div className="mr-2">
												<Typography variant="body2" className="text-uppercase">2 days</Typography>
											</div>
										</div>	
										
									</div>
									<div  className=" mt-3 mb-2">
										<EditDialog  start={start} roomType={roomType}/>
									</div>
									<Divider />
									<div className="d-flex justify-content-between my-2">
										<Typography variant="body2" className="text-uppercase">Amount for selected days</Typography>
										<Typography variant="body2" className="text-uppercase">${ roomAmount }</Typography>
									</div>
									<div className="d-flex justify-content-between mb-2">
										<Typography variant="body2" className="text-uppercase">VAT</Typography>
										<Typography variant="body2" className="text-uppercase">${VAT}</Typography>
									</div>
									<Divider />
									<div className="d-flex align-items-center justify-content-between mb-2">
										<Typography variant="body2" className="text-uppercase font-weight-bold">Total amount</Typography>
										<Typography variant="h6" className="text-uppercase" color="secondary">${roomAmount + VAT}</Typography>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-md-7 col-lg-8 col-xl-8">
						<Elements stripe={stripePromise}>
							{ this.props.location.hotelInfo &&
								<CheckoutForm selectedHotel={ this.props.location.hotelInfo }  />
							}
						</Elements>
					</div>
				</div>
			</div>
		);
	}
}
export default BookHotel;