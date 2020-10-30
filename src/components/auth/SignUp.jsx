import React, { useState } from 'react';
// import axios from 'axios';
// import { Formik, Form } from 'formik';
// import * as Yup from 'yup';
// import FormikControl from './FormikControl';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';


// class SignIn extends Component {
// 	handleChange=(e)=> {
// 		this.setState({ [e.target.id]: e.target.value });
// 	}
// 	handleSubmit=()=>{

// 	}
function SignUp(){
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	function validateForm() {
		return email.length > 3 && password.length > 7 && (password === confirmPassword) && firstName.length > 0 && lastName.length > 0;
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		let data = {
			firstName: firstName,
			lastName: lastName,
			password: password,
			password_confirmation: confirmPassword,
			email: email, 
		}
		console.log(data)
		// try {
		// 	let res = await axios.post('https://quickstays.azurewebsites.net/api/v1/register', data);
		// 	console.log(res);
		// } catch (error) {
		// 	console.log(error)
		// }
	}
	return (
		<div>
			<form action="" onSubmit={handleSubmit}>
				<div className="form-group mb-3">
					<TextField
						onChange={e => setFirstName(e.target.value)}
						variant="outlined"
						label="First Name"
						id="firstName"
						value={firstName}
						fullWidth
					/>
				</div>
				<div className="form-group mb-3">
					<TextField
						onChange={e => setLastName(e.target.value)}
						variant="outlined"
						label="Last Name"
						id="lastName"
						value={lastName}
						fullWidth
					/>
				</div>
				<div className="form-group mb-3">
					<TextField
						onChange={e => setEmail(e.target.value)}
						variant="outlined"
						label="Email"
						id="email"
						value={email}
						fullWidth
					/>
				</div>
				<div className="form-group mb-3">
					<TextField
						onChange={e => setPassword(e.target.value)}
						variant="outlined"
						label="Password"
						id="password"
						value={password}
						fullWidth
					/>
				</div>
				<div className="form-group mb-3">
					<TextField
						onChange={e => setConfirmPassword(e.target.value)}
						variant="outlined"
						label="Confirm Password"
						id="confirmPassword"
						value={confirmPassword}
						fullWidth
					/>
				</div>
				<div className="form-group">
					<Button
						type="submit"
						variant="contained"
						color="primary"
						fullWidth
						size="large"
						disabled={!validateForm()}
						>
							Register
					</Button>
				</div>
			</form>
		</div>
	);
}
// }
export default SignUp;