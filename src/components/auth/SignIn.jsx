import React, { useState } from 'react';
import axios from 'axios';
import { withRouter} from 'react-router-dom';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import AccountCircle from '@material-ui/icons/AccountCircle';

axios.defaults.headers.post['Content-Type'] = 'text/plain';

function SignIn(props){
	const [values, setValues] = useState({
		email: "",
		password: "",
	});

	const [isLoading, setLoadingStatus] = useState(false);
	const [isRequestError, setRequestError] = useState(false);
	const [errorMessage, setRequestErrorMessage] = useState("");
	// const [authenticationToken, setAuthenticationToken] = useState(null);

	function validateForm() {
		return values.email.length > 3 && values.password.length > 7;
	}

	const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	};
	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoadingStatus(true);
		let data = {
			email:values.email,
			password: values.password
		}
		
		if(data.email !== "" && data.password !== ""){
			try {
				let response = await axios.post('https://quickstays.azurewebsites.net/api/v1/login', JSON.stringify(data));
				if(response.status === 200 || response.status === 201){
					// setAuthenticationToken(response.data.token)
					props.history.push('/hotels');
				}
			} catch (error) {
				console.log(error)
				if(error.response.data){
					console.log(error.response.data)
					setRequestError(true);
					setRequestErrorMessage(error.response.data);
					console.log(isRequestError)
					setLoadingStatus(false);
				}
			}
		}
	}
	return (
		<div>
			<form action="" onSubmit={handleSubmit}>
				<div className="form-group mb-3">
					<TextField
						onChange={handleChange('email')}
						variant="outlined"
						label="Email"
						id="email"
						value={values.email}
						className="d-block"
						fullWidth
						required
						InputProps={{
							startAdornment: (
							  <InputAdornment position="start">
								<AccountCircle />
							  </InputAdornment>
							),
						}}
					/>
				</div>
				<div className="form-group mb-3">
					<FormControl variant="outlined" fullWidth>
						<InputLabel htmlFor="password">Password</InputLabel>
						<OutlinedInput
							id="password"
							type={values.showPassword ? 'text' : 'password'}
							value={values.password}
							onChange={handleChange('password')}
							required
							endAdornment={
							<InputAdornment position="end">
								<IconButton
								aria-label="toggle password visibility"
								onClick={handleClickShowPassword}
								onMouseDown={handleMouseDownPassword}
								edge="end"
								>
								{values.showPassword ? <Visibility /> : <VisibilityOff />}
								</IconButton>
							</InputAdornment>
							}
							labelWidth={70}
						/>
					</FormControl>
				</div>
				<div className="form-group">
					{ isRequestError && <Alert severity="error">{ errorMessage }</Alert> }
					<Button
						type="submit"
						className="mt-2"
						variant="contained"
						color="primary"
						fullWidth
						size="large"
						disabled={!validateForm() || isLoading}
						>
							Sign In
					</Button>
				</div>
			</form>
		</div>
	);
}
// }
export default withRouter(SignIn);