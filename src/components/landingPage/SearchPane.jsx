import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link /*, NavLink */} from 'react-router-dom';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SearchPane() {
	const classes = useStyles();
	const [searchTypeId, setSearchType] = React.useState('');
	const handleChange = (event) => {
	 setSearchType(event.target.value);
	};

	return (
		<form className={classes.root} noValidate autoComplete="off">
		<div className="d-flex align-items-center py-3">

        	<div>
	 			<FormControl variant="outlined" className={classes.formControl}>
		        <InputLabel id="demo-simple-select-outlined-label">Search By Location</InputLabel>
		        <Select
		          labelId="demo-simple-select-outlined-label"
		          id="demo-simple-select-outlined"
		          value={searchTypeId}
		          onChange={handleChange}
		          label="Age"
		        >
		          <MenuItem value="">
		            <em>None</em>
		          </MenuItem>
		          <MenuItem value={1}>By Current Location</MenuItem>
		          <MenuItem value={2}>By Hotel Name</MenuItem>
		          <MenuItem value={3}>By Others</MenuItem>
		        </Select>
		      </FormControl>
        	</div>
	      <div>
	        	<TextField id="outlined-basic" label="Enter Location" variant="outlined" />
	      </div>
        	<div>
	         <TextField
	         	variant="outlined"
				    id="datetime-local"
				    label="Check out date"
				    type="datetime-local"
				    defaultValue="2020-10-21T10:30"
				    className="d-block"
				    InputLabelProps={{
				      shrink: true,
				    }}
				/>
        	</div>
        	<div>
	         <FormControl variant="outlined" className={classes.formControl}>
					<InputLabel id="demo-simple-select-outlined-label">Search By Location</InputLabel>
					<Select
						labelId="demo-simple-select-outlined-label"
						id="demo-simple-select-outlined"
						value={searchTypeId}
						onChange={handleChange}
						label="Age"
					>
						<MenuItem value="">
							<em>None</em>
						</MenuItem>
						<MenuItem value={1}>By Current Location</MenuItem>
						<MenuItem value={2}>By Hotel Name</MenuItem>
						<MenuItem value={3}>By Others</MenuItem>
					</Select>
		      </FormControl>
        	</div>
        	<div>
				<FormControl variant="outlined" className={classes.formControl}>
					<InputLabel id="demo-simple-select-outlined-label">Search By Location</InputLabel>
					<Select
						labelId="demo-simple-select-outlined-label"
						id="demo-simple-select-outlined"
						value={searchTypeId}
						onChange={handleChange}
						label="Age"
					>
						<MenuItem value="">
							<em>None</em>
						</MenuItem>
						<MenuItem value={1}>By Current Location</MenuItem>
						<MenuItem value={2}>By Hotel Name</MenuItem>
						<MenuItem value={3}>By Others</MenuItem>
					</Select>
				</FormControl>
        	</div>
        	<div>
        	<Link to="/hotels" className="text-white text-decoration-none">
        		<Button variant="contained" color="primary">Search</Button>
			</Link>
        </div>
      </div>
      </form>
	);
}