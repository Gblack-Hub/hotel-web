import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

class Rooms extends React.PureComponent {
	state = {
		defaultRoom: 1
	}
	handleRoomChange=(e)=>{
		this.setState({defaultRoom: e.target.value})
	}
	handleDecrementRoom=()=>{
		this.setState(prevState => { return {defaultRoom: prevState.defaultRoom-1}}, console.log(this.state.defaultRoom));
	}
	handleIncrementRoom=()=>{
		this.setState(prevState => { return {defaultRoom: prevState.defaultRoom+1}}, console.log(this.state.defaultRoom));
	}
	render(){
		// const { rooms } = this.props;
		const { defaultRoom } = this.state;
		return (
			<div className="container-fluid">
				<div className="row mb-5">
					<div className="col-12">
						<Typography variant="h6">Single Room</Typography>
						<div className="d-flex align-items-center mb-3">
							<Typography variant="body1" color="textSecondary" className="mr-2 text-uppercase">From</Typography>
							<Typography variant="body1" className="font-weight-bold">N10,000</Typography>
						</div>
						<div className="row">
							<div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
								<div className="row">
									<div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
										<Typography variant="body1" className="mb-3">
											Single Room equipped with air conditioning and private bathroom.
											In addition, the room includes a minibar a shower or a bathtub, a hairdryer,
											a bathrobe, free toiletries, a living room and a cofee maker.
										</Typography>
										<Divider />
										<div className="d-flex align-items-center justify-content-between py-3">
											<Typography variant="subtitle2" className="text-uppercase">Select No of Rooms</Typography>
											<div className="d-flex align-items-center">
												<Button variant="contained" color="primary" disableElevation onClick={this.handleDecrementRoom}>
													<RemoveIcon />
												</Button>
												<input type="text" className="form-control mx-2 px-1 text-center" value={defaultRoom} onChange={this.handleRoomChange} style={{width: '40px'}} />
												<Button variant="contained" color="primary" disableElevation onClick={this.handleIncrementRoom}>
													<AddIcon />
												</Button>
											</div>
										</div>
										<div className="d-flex flex-column">
											<Typography variant="subtitle2" className="text-uppercase">Select No of hours</Typography>
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
											</div>
											<Button variant="contained" color="secondary" size="large" disableElevation>
												<Typography color="primary">Reserve Now</Typography>
											</Button>
										</div>
									</div>
									<div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
										<img src={require('../../../assets/images/img1.jpg')} className="img-fluid rounded" alt="" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row mb-5">
					<div className="col-12">
						<Typography variant="h6">Double Room</Typography>
						<div className="d-flex align-items-center mb-3">
							<Typography variant="body1" color="textSecondary" className="mr-2 text-uppercase">From</Typography>
							<Typography variant="body1" className="font-weight-bold">N16,000</Typography>
						</div>
						<div className="row">
							<div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
								<div className="row">
									<div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
										<Typography variant="body1" className="mb-3">
											Single Room equipped with air conditioning and private bathroom.
											In addition, the room includes a minibar a shower or a bathtub, a hairdryer,
											a bathrobe, free toiletries, a living room and a cofee maker.
										</Typography>
										<Divider />
										<div className="d-flex align-items-center justify-content-between py-3">
											<Typography variant="subtitle2" className="text-uppercase">Select No of Rooms</Typography>
											<div className="d-flex align-items-center">
												<Button variant="contained" color="primary" disableElevation onClick={this.handleDecrementRoom}>
													<RemoveIcon />
												</Button>
												<input type="text" className="form-control mx-2 px-1 text-center" value={defaultRoom} onChange={this.handleRoomChange} style={{width: '40px'}} />
												<Button variant="contained" color="primary" disableElevation onClick={this.handleIncrementRoom}>
													<AddIcon />
												</Button>
											</div>
										</div>
										<div className="d-flex flex-column">
											<Typography variant="subtitle2" className="text-uppercase">Select No of hours</Typography>
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
											</div>
											<Button variant="contained" color="secondary" size="large" disableElevation>
												<Typography color="primary">Reserve Now</Typography>
											</Button>
										</div>
									</div>
									<div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
										<img src={require('../../../assets/images/img1.jpg')} className="img-fluid rounded" alt="" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<Typography variant="h6">Executives Suites</Typography>
						<div className="d-flex align-items-center mb-3">
							<Typography variant="body1" color="textSecondary" className="mr-2 text-uppercase">From</Typography>
							<Typography variant="body1" className="font-weight-bold">N25,000</Typography>
						</div>
						<div className="row">
							<div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
								<div className="row">
									<div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
										<Typography variant="body1" className="mb-3">
											Single Room equipped with air conditioning and private bathroom.
											In addition, the room includes a minibar a shower or a bathtub, a hairdryer,
											a bathrobe, free toiletries, a living room and a cofee maker.
										</Typography>
										<Divider />
										<div className="d-flex align-items-center justify-content-between py-3">
											<Typography variant="subtitle2" className="text-uppercase">Select No of Rooms</Typography>
											<div className="d-flex align-items-center">
												<Button variant="contained" color="primary" disableElevation onClick={this.handleDecrementRoom}>
													<RemoveIcon />
												</Button>
												<input type="text" className="form-control mx-2 px-1 text-center" value={defaultRoom} onChange={this.handleRoomChange} style={{width: '40px'}} />
												<Button variant="contained" color="primary" disableElevation onClick={this.handleIncrementRoom}>
													<AddIcon />
												</Button>
											</div>
										</div>
										<div className="d-flex flex-column">
											<Typography variant="subtitle2" className="text-uppercase">Select No of hours</Typography>
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
											</div>
											<Button variant="contained" color="secondary" size="large" disableElevation>
												<Typography color="primary">Reserve Now</Typography>
											</Button>
										</div>
									</div>
									<div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
										<img src={require('../../../assets/images/img1.jpg')} className="img-fluid rounded" alt="" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Rooms;