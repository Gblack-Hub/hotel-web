import React, { useState } from 'react';
import axios from 'axios';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

axios.defaults.headers.post['Content-Type'] = 'text/plain';

function SignUp(){
	const [values, setValues] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: ""
	});

	const [isLoading, setLoadingStatus] = useState(false);
	const [isPasswordNotMatch, setPasswordMatchState] = useState(false);
	const [isPasswordNotLongEnough, setPasswordNotLongState] = useState(false);
	const [isRequestError, setRequestError] = useState(false);
	const [errorMessage, setRequestErrorMessage] = useState(null);

	function validateForm() {
		return values.email.length > 3 && values.password.length > 7 && (values.password === values.confirmPassword) && values.firstName.length > 0 && values.lastName.length > 0;
	}

	const handleClickShowPassword = (e) => {
		setValues({ ...values, showPassword: !values.showPassword });
	};
	const handleClickShowConfirmPassword = () => {
		setValues({ ...values, showConfirmPassword: !values.showConfirmPassword });
	};
	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};
	
	React.useEffect(() => {
		console.log(errorMessage)
		if(values.password !== values.confirmPassword){
			setPasswordMatchState(true);
		} else {
			setPasswordMatchState(false);
		}

		if(values.password.length > 7 && values.confirmPassword.length > 7){
			setPasswordNotLongState(false);
		} else {
			setPasswordNotLongState(true);
		}
	},[errorMessage, values.password, values.confirmPassword])

	const handleSubmit = async (e) => {
		e.preventDefault();
		let data = {
			firstName: values.firstName,
			lastName: values.lastName,
			password: values.password,
			password_confirmation: values.confirmPassword,
			email: values.email, 
		}
		console.log(data)
		if(data.email !== "" && data.password !== "" && data.firstName !== "" && data.lastName !== "" && data.password_confirmation !== ""){
			try {
				let res = await axios.post('https://quickstays.azurewebsites.net/api/v1/register', JSON.stringify(data));
				console.log(res);
			} catch (error) {
				if(error.response.data){
					console.log(error.response.data.validations.errors);
					if(error.response.data.validations.errors.email){
						setRequestErrorMessage(error.response.data.validations.errors.email[0]);
						console.log(isRequestError, errorMessage)
					}
					else if(error.response.data.validations.errors.firstName){
						setRequestErrorMessage(error.response.data.validations.errors.firstName[0]);
						console.log(isRequestError, errorMessage)
					}
					else if(error.response.data.validations.errors.lastName){
						setRequestErrorMessage(error.response.data.validations.errors.lastName[0]);
						console.log(isRequestError, errorMessage)
					}
					else if(error.response.data.validations.errors.password_confirmation){
						setRequestErrorMessage(error.response.data.validations.errors.password_confirmation[0]);
						console.log(isRequestError, errorMessage)
					}
					else if(error.response.data.validations.errors.password){
						setRequestErrorMessage(error.response.data.validations.errors.password[0]);
						console.log(isRequestError, errorMessage)
					}
					setRequestError(true);
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
						onChange={handleChange('firstName')}
						variant="outlined"
						label="First Name"
						id="firstName"
						required
						value={values.firstName}
						fullWidth
						error={false}
					/>
				</div>
				<div className="form-group mb-3">
					<TextField
						onChange={handleChange('lastName')}
						variant="outlined"
						label="Last Name"
						id="lastName"
						required
						value={values.lastName}
						fullWidth
					/>
				</div>
				<div className="form-group mb-3">
					<TextField
						onChange={handleChange('email')}
						variant="outlined"
						label="Email"
						id="email"
						value={values.email}
						required
						fullWidth
					/>
				</div>
				<div className="form-group mb-3">
					<TextField
						id="password"
						variant="outlined"
						label="Password"
						error={isPasswordNotMatch || isPasswordNotLongEnough}
						helperText={ isPasswordNotMatch ? "passwords doesn't match" : isPasswordNotLongEnough ? "must be at least 8 characters long" : ""}
						type={values.showPassword ? 'text' : 'password'}
						value={values.password}
						onChange={handleChange('password')}
						fullWidth
						required
						InputProps={{
							endadornment: (
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
							),
						}}
					/>
				</div>
				<div className="form-group mb-3">
					<TextField
						id="confirmPassword"
						variant="outlined"
						label="Confirm Password"
						error={isPasswordNotMatch || isPasswordNotLongEnough}
						helperText={ isPasswordNotMatch ? "passwords doesn't match" : isPasswordNotLongEnough ? "must be at least 8 characters long" : ""}
						type={values.showConfirmPassword ? 'text' : 'password'}
						value={values.confirmPassword}
						onChange={handleChange('confirmPassword')}
						fullWidth
						required
						InputProps={{
							endadornment:(
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={handleClickShowConfirmPassword}
										onMouseDown={handleMouseDownPassword}
										edge="end"
									>
									{values.showConfirmPassword ? <Visibility /> : <VisibilityOff />}
									</IconButton>
								</InputAdornment>
							),
						}}
					/>
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
							Register
					</Button>
				</div>
			</form>
		</div>
	);
}
// }
export default SignUp;