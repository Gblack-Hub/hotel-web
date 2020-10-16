import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
          <input type="date" className="form-control" placeholder="check out date" />
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
        	<Button variant="contained" color="primary">
			  Search
			</Button>
        </div>
      </div>
      </form>
	);
}