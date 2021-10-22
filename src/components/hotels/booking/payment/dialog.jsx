import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Backdrop from '@material-ui/core/Backdrop';
import {makeStyles, withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';
import { Formik } from 'formik';
import moment from 'moment';
import MenuItem from '@material-ui/core/MenuItem';
import EditIcon from '@material-ui/icons/Edit';
import FormControl from '@material-ui/core/FormControl';

//noOfDays: 1
const useStyles = makeStyles((theme) => ({
   
    dialog: {
      backgroundColor: "#fff",
      color: 'white',
      //border: '2px solid #000',
     // boxShadow: theme.shadows[5],
      //padding: theme.spacing(2, 4, 3),
      // borderRadius:" 1em",
    },
    header:{
      backgroundColor:theme.palette.primary.main,
      color:"#fff",
      width:"100%",
      height:"4rem",
      padding: theme.spacing(2, 3, 1, 3),
      display: 'flex',
      flexWrap: 'wrap',
    },
    
    button: {
      
        color:theme.palette.primary.main,
        backgroundColor:theme.palette.secondary.main,
        paddingTop:theme.spacing(1),
        paddingLeft:theme.spacing(5),
        height: "30px",
        width:"8em",
        //border: '2px solid "#053858"',
       
        '&:focus':{
          outline:"none",
        },
      },
      savebutton: {
        marginLeft: "35rem",
        marginTop: "2rem",
        marginBottom: theme.spacing(2),
        color:theme.palette.primary.main,
        backgroundColor:theme.palette.secondary.main,
        height: "40px",
        width:"10em",
        '&:hover':{
          outline:"none",
          //backgroundColor:theme.palette.secondary.main,
          color:theme.palette.primary.main,
        },
      },
      addIcon: {
        marginRight: theme.spacing(1),
      },
  
      textField: {
        marginLeft: theme.spacing(3),
        //marginRight: theme.spacing(2),
        //width: 155,     
      },
     
      
     
  }));

const CssTextField = withStyles({
	root: {
        
	  '& .MuiInputBase-root': {
		backgroundColor: "#fff"
	  },
	 
	},
  })(TextField);
  

const EditDialog = (props) => {
    const classes = useStyles();
    const {start, roomType}=props;
    const [open, setOpen] = React.useState(false);

   // const [days, setDays]= React.useState(1) 
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
   

    const handleSubmit = e => {
    
  };
   

  const roomtype = [
    {
    value: "0", label:"1"
    },
    {
    value: "2", label:  "2"
    },
    {
    value: "3", label:  "3"
    },
    {
    value: "4+",  label:  "4+"
    }
    ]; 
    const today = new Date()
    const initialValues = {
      
        checkInDateTime:moment({start}).format("YYYY-MM-DD"),
        checkOutDateTime: moment(today).add(1, 'days').format("YYYY-MM-DD"),
        //noOfDays:1,
        roomType:""
    };
    return ( 
        <div>
         <div className="d-flex justify-content-end">
         <Button
        variant="contained"
        //color="secondary"
        className={classes.button}
        endIcon={<EditIcon />}
        onClick={handleOpen}
      >
        EDIT
      </Button>
        </div>   
       
           
        <Dialog maxWidth="70" maxHeight="100" 
         
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 1000,
            
            }}>
              <div className={classes.dialog}>
                <div className={classes.header}>
                  <Typography 
                    variant= "h5" >
                  CHANGE INFORMATION
                </Typography><CloseIcon style={{marginLeft:"30rem", marginTop:5, fontSize: "22pxx"}}  onClick={handleClose}/>
                 </div>
               
              <DialogContent>
              <Formik
					//innerRef ={ref}
					initialValues={initialValues} 
					
					 onSubmit= 
					 {handleSubmit}						
				>
					 {({
						values,  handleChange, handleSubmit, isSubmitting
					}) =>(
               
                  <form className={classes.container} noValidate onSubmit={handleSubmit}>
                      <div className="d-flex ">
                          <CssTextField 
                          className={classes.textField}
                        id=" checkInDateTime"
                        label="check in Date"
                        variant="filled"
                        type="date"
                        name= "checkInDateTime"
                        value= {values.checkInDateTime}
                        InputProps={{inputProps: { min: moment(today).add(0, 'days').format("YYYY-MM-DD") } }}
                        onChange={handleChange}
                        //defaultValue="2017-05-24"
                        InputLabelProps={{
                        shrink: true,
                       
                        }}
                    />
                 
                    <CssTextField
                        id="checkOutDateTime"
                        label="check out Date"
                        type="date"
                        variant="filled"
                        name= "checkOutDateTime"
                        onChange={handleChange}
                        value= {values.checkOutDateTime}
                        className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
                       
                      
                    /> 
                      </div>
                   
                 <div classname="row">
                    <div className="col-4 mt-3 pl-4" >
                {/* <FormControl size="small"  className="rounded bg-light" fullwidth variant="filled"> */}
				    <CssTextField 					   
						select
						variant="filled"
						size="small" 										
						label="Select Room Type"										
						id="roomType"
                        name="roomType"
                        fullWidth
						value={values.roomType}
                        onChange={handleChange}
            		>
					    {roomtype.map(option => (
						<MenuItem key={option.value} value={option.value}>
						{option.label}
						</MenuItem>
						))}
					</CssTextField >
			
                </div>  
                 </div>
               
                  <div  >
                <Button
                  className={classes.savebutton}  
                  type="submit"
                  onClick={handleClose}
                  disabled={isSubmitting}
                >
                SAVE CHANGES
                </Button>
                  </div>
                  </form>
                 )}
                 </Formik>  
                
              </DialogContent>
                
                
            </div>
        </Dialog>
        </div>
       
     );
}
 
export default EditDialog;
