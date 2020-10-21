import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link /*, NavLink */} from 'react-router-dom';


class Navbar extends Component {
	render(){
		return (
			<nav className="navbar navbar-expand-md navbar-light bg-light sticky-top shadow">
			  <Link className="navbar-brand" to="/">QuickStays</Link>
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>

			  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
			    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
			      <li className="nav-item active">
			        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
			      </li>
			      <li className="nav-item">
			        <a className="nav-link" href="#">About Us</a>
			      </li>
			      <li className="nav-item">
			        <a className="nav-link" href="#">Contact Us</a>
			      </li>
			    </ul>
			    <div>
			      {/*<Button variant="contained" type="submit" className="mr-3" disableElevation>
			       	<AccountCircleIcon /> <span className="ml-1">MY ACCOUNT</span>
			      </Button>*/}
			      <Button variant="contained" type="submit" className="mr-3" disableElevation>SIGN IN</Button>
			      <Button variant="contained" color="primary" type="submit" disableElevation>SIGN UP</Button>
			    </div>
			  </div>
			</nav>
		);
	}
}
export default Navbar;