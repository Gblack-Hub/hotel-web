import React, { Component } from 'react';
import axios from 'axios';

class BookHotel extends Component {
	state = {

	}

	componentDidMount(){
		let id = this.props.match.params.hotel_id;
		
		// let data = {
		// 	guestCount: 3
		// }
		this.fetchData(id);
	}

	fetchData=(id)=>{
		let data = {
		    "start": "2020-10-25",
		    "end": "2020-10-29",
		    "firstName": "Bolaji",
		    "lastName": "Akande",
		    "email": "me.akandebolaji@gmail.com",
		    "phoneNo": "+1012345667",
		    "rooms": [{
		        "areaTypeId": "2a709fb5-703c-4049-ab4c-a8efeff6e1b8"
		    }],
		    "property_id":"7f6a547a-b39b-4190-bea1-572108dfcebc",
		    "guestsCount": 6,
		    "stripeToken": "tok_visa"
		}
		axios.post(`https://quickstays.azurewebsites.net/api/v1/bookings`, data )
		.then(res => {
		   console.log(res.data.data);
		   this.setState({ hotelData: res.data.data });
		})
		.catch(error => {
			console.log(error);
		}) 
	}
	render(){
		return (
			<div>
				<form action="">
					<div className="form-control">
						<input type="text" className="form-control" placeholder="First Name" />
					</div>
					<div className="form-control">
						<input type="text" className="form-control" placeholder="Last Name" />
					</div>
					<div className="form-control">
						<input type="email" className="form-control" placeholder="Email" />
					</div>
					<div className="form-control">
						<input type="text" className="form-control" />
					</div>
					<div className="form-control">
						<button className="btn btn-primary">Reserve Now</button>
					</div>
				</form>
			</div>
		);
	}
}
export default BookHotel;