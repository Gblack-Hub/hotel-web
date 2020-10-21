import React, { Component } from 'react';

class SignUp extends Component {
	render(){
		return (
			<div>
				<form action="">
					<div className="form-group">
						<input type="email" className="form-control" placeholder="email" />
					</div>
					<div className="form-group">
						<input type="password" className="form-control" placeholder="enter password" />
					</div>
					<div className="form-group">
						<input type="password" className="form-control" placeholder="confirm password" />
					</div>
					<input type="checkbox" placeholder="confirm password" />
					<div className="form-group">
						<button className="btn btn-block btn-primary">Sign Up</button>
					</div>
				</form>
			</div>
		);
	}
}
export default SignUp;