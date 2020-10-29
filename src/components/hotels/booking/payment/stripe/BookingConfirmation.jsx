import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import Divider from '@material-ui/core/Divider';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Chip from '@material-ui/core/Chip';
import DialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


class BookingConfirmation extends Component {
	state = {
		isDialogOpen: false,
	}
	componentDidMount(){
		console.log(this.props)
	}
	componentDidUpdate(prevProps){
		if(prevProps != this.props){
			console.log(this.props);
		}
	}
	handleDialogOpen=()=>{
		this.setState({ isDialogOpen: true });
	}
	handleDialogClose=()=>{
		this.setState({ isDialogOpen: false });
	}
	handleSubmit = async event => {
		event.preventDefault();

	};
	render(){
		const { bookingInfo, bookingReceiptInfo } = this.props;
		const { isDialogOpen } = this.state;

		return (
			<div className="container-fluid">
				<Typography variant="h5">Booking Confirmation</Typography>
				<div className="row mb-4">
					<div className="col-12">
						<div className="d-flex justify-content-between align-items-center">
							<Typography variant="body1" className="font-weight-bold">Your Information</Typography>
							<Button size="small"><Typography color="primary">Edit</Typography></Button>
						</div>
						<Divider />
						<div className="d-flex align-items-center my-2">
							<Typography variant="body2" className="text-uppercase">Full Name: &nbsp; </Typography>
							<Typography variant="body1" color="primary" className="font-weight-bold">{ bookingInfo.firstName } { bookingInfo.lastName }</Typography>
						</div>
						<div className="d-flex align-items-center mb-3">
							<Typography variant="body2" className="text-uppercase">Email Address: &nbsp; </Typography>
							<Typography variant="body1" color="primary" className="font-weight-bold">{ bookingInfo.email }</Typography>
						</div>
						<Alert severity="info">BOOKING IS MADE ON BEHALF OF A GUEST</Alert>
					</div>
				</div>
				<div className="row mb-4">
					<div className="col-12">
						<div className="d-flex justify-content-between align-items-center">
							<Typography variant="body1" className="font-weight-bold">Guest Information</Typography>
							<Button size="small"><Typography color="primary">Edit</Typography></Button>
						</div>
						<Divider />
						<div className="d-flex align-items-center mb-3">
							<Typography variant="body2" className="text-uppercase">Full Name: &nbsp; </Typography>
							<Typography variant="body1" color="primary" className="font-weight-bold">{ bookingInfo.firstName } { bookingInfo.lastName }</Typography>
						</div>
						<div className="d-flex align-items-center mb-3">
							<Typography variant="body2" className="text-uppercase">Email Address: &nbsp; </Typography>
							<Typography variant="body1" color="primary" className="font-weight-bold">{ bookingInfo.email }</Typography>
						</div>
						<Alert severity="info" className="text-uppercase">Payment for booking is done now after confirmation</Alert>
					</div>
				</div>
				<div className="row mb-3">
					<div className="col-12">
						<div className="d-flex justify-content-between align-items-center">
							<Typography variant="body1" className="font-weight-bold">Payment Information</Typography>
							<Button size="small"><Typography color="primary">Edit</Typography></Button>
						</div>
						<Divider />
						<div className="d-flex justify-content-between align-items-center mb-2">
							<div className="d-flex flex-column">
								<Typography variant="body2" className="text-uppercase mb-1">Payment will be charged to: </Typography>
								<Typography variant="body1" className="font-weight-bold">visa card ending in XXXX</Typography>
							</div>
							<Typography variant="h5">VISA</Typography>
						</div>
					</div>
				</div>
				<Button variant="contained" color="secondary" fullWidth onClick={this.handleDialogOpen} disableElevation>
					Confirm Booking
				</Button>
				<Dialog open={isDialogOpen} onClose={this.handleDialogClose} aria-labelledby="Booking-Confirmation-Dialog">
					<DialogContent>
						<div className="row">
							<div className="col-12 text-center">
								<CheckCircleIcon style={{ fontSize: 150 }} color="secondary" />
								{/* <DialogContentText> */}
									<Typography variant="body1">Your Payment of <Typography className="font-weight-bold" variant="body1" component="span">${ bookingReceiptInfo.amount }</Typography> has been processed successfully.</Typography>
									<Typography variant="body1">A reservation confirmation and transaction receipt has been sent to:</Typography>
								{/* </DialogContentText> */}
								<Chip label={ bookingInfo.email } className="font-weight-bold my-3" clickable color="primary" variant="outlined" />
								<Typography variant="body1">
									for your reference, you Quickstays transaction id is&nbsp;
									<Typography variant="body1" className="font-weight-bold" component="span">{bookingReceiptInfo.bookingReferenceCode}</Typography>
								</Typography>
							</div>
						</div>
						<div className="row justify-content-center align-items-center mt-3">
							<div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center mb-2">
								<Button variant="contained" onClick={this.handleDialogClose} color="secondary" disableElevation>Order a ride Now</Button>
							</div>
							<div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center mb-2">
								<Link to="/"><Button variant="outlined" color="primary" disableElevation>Back to Home page</Button></Link>
							</div>
						</div>
					</DialogContent>
					{/* <DialogActions>
						<Button onClick={this.handleDialogClose} color="primary">
							Cancel
						</Button>
						<Button onClick={this.handleDialogClose} color="primary">
							Subscribe
						</Button>
					</DialogActions> */}
				</Dialog>
			</div>
		);
	}
}

export default BookingConfirmation;