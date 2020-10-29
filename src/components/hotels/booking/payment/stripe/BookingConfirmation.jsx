import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

class BookingConfirmation extends Component {
	state = {
		isProcessing: false,
		isDialogOpen: false
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
		const { data } = this.props;

		return (
			<div className="container-fluid">
				<Typography variant="h5">Booking Confirmation</Typography>
				<div className="row">
					<div className="col-12">
						<div className="d-flex justify-content-between align-items-center">
							<Typography variant="body1" className="font-weight-bold">Your Information</Typography>
							<Button><Typography color="primary">Edit</Typography></Button>
						</div>
						<Divider />
						<div className="d-flex justify-content align-items-center">
							<Typography variant="body2" className="text-uppercase">Full Name</Typography>
							<Typography variant="body1" color="primary">{ data.firstName } { data.lastName }</Typography>
						</div>
					</div>
				</div>
				
				<Button variant="contained" color="secondary" fullWidth onClick={this.handleDialogOpen}>
					Confirm Booking
				</Button>

				<MuiDialogTitle disableTypography className={classes.root} {...other}>
					<Typography variant="h6">Booking Confirmed!</Typography>
					{onClose ? (
						<IconButton aria-label="close" onClick={this.handleDialogClose}>
							<CloseIcon />
						</IconButton>
					) : null}
				</MuiDialogTitle>
			</div>
		);
	}
}

export default BookingConfirmation;