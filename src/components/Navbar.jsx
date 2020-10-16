import React, { Component } from 'react';

class Navbar extends Component {
	render(){
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
			  <a className="navbar-brand" href="#">QuickStays</a>
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>

			  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
			    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
			      <li className="nav-item active">
			        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
			      </li>
			      <li className="nav-item">
			        <a className="nav-link" href="#">Explore</a>
			      </li>
			      <li className="nav-item">
			        <a className="nav-link" href="#">My Bookings</a>
			      </li>
			    </ul>
			    <div>
			      <button className="btn px-4" type="submit">SIGN IN</button>
			      <button className="btn btn-qs-primary px-4" type="submit">SIGN UP</button>
			    </div>
			  </div>
			</nav>
		);
	}
}
export default Navbar;