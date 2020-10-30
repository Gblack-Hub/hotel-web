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
function SignIn(){
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function validateForm() {
		return email.length > 3 && password.length > 7;
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		let data = {
			email:email, password: password
		}
		console.log(data)
		// try {
		// 	let res = await axios.post('https://quickstays.azurewebsites.net/api/v1/login', data);
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
						onChange={e => setEmail(e.target.value)}
						variant="outlined"
						label="Email"
						id="email"
						value={email}
						className="d-block"
						fullWidth
					/>
				</div>
				<div className="form-group mb-3">
					<TextField
						onChange={e => setPassword(e.target.value)}
						variant="outlined"
						label="password"
						id="password"
						value={password}
						className="d-block"
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
							Sign In
					</Button>
				</div>
			</form>
		</div>
	);
}
// }
export default SignIn;