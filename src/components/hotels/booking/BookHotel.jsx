import React, { Component } from 'react';
import axios from 'axios';

import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import EditIcon from '@material-ui/icons/Edit';
// import StarHalfIcon from '@material-ui/icons/StarHalf';

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./payment/stripe/CheckoutForm";
import { withRouter } from 'react-router-dom';

// import BookingConfirmation from "./payment/stripe/BookingConfirmation.jsx";

const STRIPE_PUBLISHABLE_KEY = "pk_test_51HXBJrBCeQfqZ7YQTyeOsrTJSU7vCOL1tPHZobPkdXcJbXLB7Dr0LyZ2qEgqRucH2OR7EwAAMve04nnktCfgrwfr00sHxbmm6L";

const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);

axios.defaults.headers.post['Content-Type'] = 'text/plain';

class BookHotel extends Component {
	state = {
		selectedHotel: ""
	}
	componentDidMount(){
		if(this.props.location.hotelInfo === undefined){
			this.props.history.push('/');
			return;
		}
		this.setState({ selectedHotel: this.props.location.hotelInfo });
	}

	render(){
		// const { hotelImage, hotelName, roomType, roomAmount, start } = this.props.location.hotelInfo ? this.props.location.hotelInfo : this.props.history.push('/');
		// const { selectedHotel } = this.state;
		return (
			<div className="container-fluid">
			{ this.props.location.hotelInfo !== undefined &&
				<div className="row mb-4 mt-2">
					<div className="col-sm-12 col-md-5 col-lg-4 col-xl-4">
						<div className="card mb-4">
							<div className="card-body p-0">
								<div className="d-flex justify-content-between p-2">
									<div className="flex-fill">
										<Typography variant="body1" className="font-weight-bold">{ this.props.location.hotelInfo.hotelName }</Typography>
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
									{ this.props.location.hotelInfo.hotelImage && <img src={this.props.location.hotelInfo.hotelImage} className="img-fluid" alt="Napoleon Hotel Roma" /> }
								</div>
								<div className="p-2">
									<Typography variant="body1" color="primary" className="font-weight-bold mb-2">{ this.props.location.hotelInfo.roomType }</Typography>
									<div className="d-flex justify-content-between mb-2">
										<Typography variant="body2" className="text-uppercase">Check In Date</Typography>
										<div className="d-flex">
											<div className="d-flex flex-column align-items-center mr-2">
												<Typography variant="body2" className="text-uppercase">{this.props.location.hotelInfo.start}</Typography>
												<Typography variant="caption" color="textSecondary">FROM 12:00PM</Typography>
											</div>
											<div>
												<IconButton size="small">
													<EditIcon fontSize="small" />
												</IconButton>
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
									<div className="d-flex justify-content-between mb-2">
										<Typography variant="body2" className="text-uppercase">No. of rooms selected</Typography>
										<div className="d-flex">
											<div className="mr-2">
												<Typography variant="body2" className="text-uppercase">1 room</Typography>
											</div>
											<div>
												<IconButton size="small">
													<EditIcon fontSize="small" />
												</IconButton>
											</div>
										</div>
									</div>
									<div className="d-flex justify-content-between mb-2">
										<Typography variant="body2" className="text-uppercase">No. of days selected</Typography>
										<div className="d-flex">
											<div className="mr-2">
												<Typography variant="body2" className="text-uppercase">2 days</Typography>
											</div>
											<div>
												<IconButton size="small">
													<EditIcon fontSize="small" />
												</IconButton>
											</div>
										</div>
									</div>
									<Divider />
									<div className="d-flex justify-content-between my-2">
										<Typography variant="body2" className="text-uppercase">Amount for selected days</Typography>
										<Typography variant="body2" className="text-uppercase">${ this.props.location.hotelInfo.roomAmount }</Typography>
									</div>
									<div className="d-flex justify-content-between mb-2">
										<Typography variant="body2" className="text-uppercase">VAT</Typography>
										<Typography variant="body2" className="text-uppercase">$210</Typography>
									</div>
									<Divider />
									<div className="d-flex align-items-center justify-content-between mb-2">
										<Typography variant="body2" className="text-uppercase font-weight-bold">Total amount</Typography>
										<Typography variant="h6" className="text-uppercase" color="secondary">$3210</Typography>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-md-7 col-lg-8 col-xl-8">
						<Elements stripe={stripePromise}>
							{ this.props.location.hotelInfo &&
								<CheckoutForm selectedHotel={ this.props.location.hotelInfo } />
							}
						</Elements>
					</div>
				</div>
			}
			</div>
		);
	}
}
export default withRouter(BookHotel);