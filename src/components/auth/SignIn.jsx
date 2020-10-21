import React, { Component } from 'react';

class SignIn extends Component {
	render(){
		return (
			<div>
				<form action="">
					<div className="form-group">
						<input type="email" className="form-control" placeholder="email" />
					</div>
					<div className="form-group">
						<input type="password" className="form-control" placeholder="password" />
					</div>
					<div className="form-group">
						<button className="btn btn-block btn-primary">Sign In</button>
					</div>
				</form>
			</div>
		);
	}
}
export default SignIn;