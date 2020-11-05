import React from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Checkbox from '@material-ui/core/Checkbox';
import Collapse from '@material-ui/core/Collapse';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Snackbar from '@material-ui/core/Snackbar';
import { ElementsConsumer, CardElement } from "@stripe/react-stripe-js";


import CardSection from "./CardSection";
import BookingConfirmation from "./BookingConfirmation";

class CheckoutForm extends React.Component {
  state = {
		isTravellingForBusiness: true,
		firstName: "",
		lastName: "",
		email: "",
		phoneNo: "+1012345667",
		saveInformation: true,
		isBookingForSomeone: false,
		isInstantPayment: true,
		paymentMethod: "",
		guestFirstName: "",
		guestLastName: "",
		guestEmail: "",
		data: null,
		isDataSubmitted: false,
		creditCardNumber: "",
		expiryDateMM: "",
		expiryDateYY: "",
		cvvCode: "",
		creditCardName: "",
    isProcessing: false,
    bookingId: "",
    bookingReferenceCode: "",
    hotelConfirmationCode: "",
    modalMessage: null,
    isRequestError: false,
    isRequestErrorMessage: "",
    isRequestWarning: false,
    isRequestWarningMessage: "",
  }

  // componentDidUpdate(){
  //   console.log(this.props);
  //   console.log(this.props.selectedHotel);
  // }
  
  handleRadioChange =(e)=> {
    this.setState({ [e.target.name]: e.target.value === "true" ? true : e.target.value === "false" ? false : false });
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value});
  };

  sendData = (data)=>{
    console.log(data)
    axios.post(`https://quickstays.azurewebsites.net/api/v1/bookings`, JSON.stringify(data))
		.then(res => {
		   	console.log(res.data);
		   	this.setState({ 
           modalMessage: {
            bookingId: res.data.bookingId,
            bookingReferenceCode: res.data.bookingReferenceCode,
            hotelConfirmationCode: res.data.hotelConfirmationCode,
            amount: this.props.selectedHotel.roomAmount
           },
           isDataSubmitted: true,
        });
			// if(this.state.isDataSubmitted){
			// 	console.log(this.state.isDataNotComplete);
			// }
		})
		.catch(error => {
		  this.setState({ isProcessing: false, isRequestError: true, isRequestErrorMessage: "All fields are required!" });
			console.log(error);
    })
    
    // const order = await axios.post('http://localhost:7000/api/stripe/charge', {
    //   amount: selectedProduct.price.toString().replace('.', ''),
    //   source: token.id,
    //   receipt_email: 'customer@example.com'
    // })
  }

  handleErrorClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ isRequestError: false });
  };
  handleWarningClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ isRequestError: false });
  };
  
  handleSubmit = async event => {
    event.preventDefault();
    
    const { start, end, guestCount, room_id, hotel_id } = this.props.selectedHotel;

    const { stripe, elements } = this.props;

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);
    if (result.error) {
      console.log(result.error.message);
  		this.setState({ isProcessing: false, isRequestWarning: true, isRequestWarningMessage: result.error.message });
    } else {
      console.log(result.token);

      this.setState({
        data: {
          // purposeOfUse: this.state.purposeOfUse,
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          phoneNo: this.state.phoneNo,
          // isBookingForMyself: this.state.isBookingForMyself,
          // isInstantPayment: this.state.isInstantPayment,
          // guestFirstName: this.state.guestFirstName,
          // guestLastName: this.state.guestLastName,
          // guestEmail: this.state.guestEmail,
          guestsCount: guestCount,
          rooms: [{ areaTypeId: room_id }],
          property_id: hotel_id,
          stripeToken: result.token.id,
          start: start,
          end: end,
        }
      }, ()=>{
        console.log(this.state.data);
        this.sendData(this.state.data);
      })
      
      this.setState({ isProcessing: true });
    }

  };

  render() {
    const { isTravellingForBusiness, isBookingForSomeone, saveInformation, paymentMethod, isProcessing, isDataSubmitted, data, modalMessage, isRequestError, isRequestErrorMessage, isRequestWarning, isRequestWarningMessage } = this.state;
    return (
      <div>
        <div>
          { isDataSubmitted ? 
            <BookingConfirmation bookingInfo={data} bookingReceiptInfo={modalMessage} />
          :
            <form onSubmit={this.handleSubmit}>
              <div>
                <div className="mb-3">
                <Typography variant="h6" color="primary">Are you travelling for business?</Typography>
                  <RadioGroup row aria-label="Are you travelling for work" name="isTravellingForBusiness" value={isTravellingForBusiness} onChange={this.handleChange}>
                    <FormControlLabel value={true} control={<Radio />} label="Yes" />
                    <FormControlLabel value={false} control={<Radio />} label="No" />
                  </RadioGroup>

                  {/* <Typography variant="h6" color="primary">Purpose of use</Typography>
                  <RadioGroup row aria-label="Are you travelling for work" name="purposeOfUse" value={purposeOfUse} onChange={this.handleChange}>
                    <FormControlLabel value="quick business meetings" control={<Radio />} label="Quick Business Meetings" />
                    <FormControlLabel value="refresh after interview" control={<Radio />} label="Refresh after interview" />
                    <FormControlLabel value="avoiding traffic" control={<Radio />} label="Avoiding traffic" />
                    <FormControlLabel value="others" control={<Radio />} label="Others" />
                  </RadioGroup>
                  <TextField
                    onChange={this.handleChange}
                    variant="outlined"
                    label="Specify"
                    name="purposeOfUse"
                    size="small"
                    fullWidth
                  /> */}
                  </div>
                  {/* <Divider /> */}
                <Typography variant="h6" className="mt-3 mb-2">Enter your information</Typography>
                <div className="col-12 p-0 mb-3">
                  <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                      <TextField
                        onChange={this.handleChange}
                        variant="outlined"
                        label="First Name"
                        name="firstName"
                        id="firstName"
                        size="small"
                        fullWidth
                      />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                      <TextField
                        onChange={this.handleChange}
                        variant="outlined"
                        label="Last Name"
                        name="lastName"
                        id="lastName"
                        size="small"
                        fullWidth
                      />
                    </div>
                    <div className="col-12 mt-3">
                      <TextField
                        onChange={this.handleChange}
                        variant="outlined"
                        label="Email"
                        name="email"
                          id="email"
                          size="small"
                          fullWidth
                      />
                      <Typography variant="caption" color="textSecondary" className="font-italic">confirmation email will be sent to this address</Typography>
                    </div>
                    <div className="col-12">
                      <div className="row">
                        <div className="col-sm-12 col-md-5 col-lg-4 col-xl-4">
                          <FormControlLabel
                              control={<Checkbox checked={saveInformation} onChange={this.handleChange} name="saveInformation" />}
                              label="Save my information"
                            />
                        </div>
                        <div className="col-sm-12 col-md-7 col-lg-8 col-xl-8">
                            <Alert severity="warning"><Typography variant="caption">You will be directed to create your account</Typography></Alert>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Divider />
              </div>

              <div className="mt-4">
                <div>
                  <Typography variant="h6" color="primary">Are you booking for yourself?</Typography>
                  <RadioGroup row aria-label="Are you booking for yourself" name="isBookingForSomeone" value={isBookingForSomeone} onChange={this.handleRadioChange}>
                    <FormControlLabel value={false} control={<Radio />} label="Yes, I am booking for myself" />
                    <FormControlLabel value={true} control={<Radio />} label="No, I am booking for someone" />
                  </RadioGroup>
                </div>
                <div className="col-12 p-0 mb-3">
                  <Collapse in={isBookingForSomeone} timeout="auto" unmountOnExit>
                    <div className="row">
                      <div className="col-12 mb-2">
                        <Typography variant="h6" className="mt-3 mb-2">Enter guest information</Typography>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <TextField
                            onChange={this.handleChange}
                            variant="outlined"
                            label="First Name"
                            name="guestFirstName"
                            id="guestFirstName"
                            size="small"
                            fullWidth
                        />
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <TextField
                            onChange={this.handleChange}
                            variant="outlined"
                            label="Last Name"
                            name="guestLastName"
                            id="guestLastName"
                            size="small"
                            fullWidth
                        />
                      </div>
                      <div className="col-12 mt-3">
                        <TextField
                            onChange={this.handleChange}
                            variant="outlined"
                            label="Email"
                            name="guestEmail"
                            id="guestEmail"
                            size="small"
                            fullWidth
                        />
                        <Typography variant="caption" color="textSecondary" className="font-italic">reservation information will be sent to this address</Typography>
                      </div>
                    </div>
                  </Collapse>
                  <div>
                    <div className="col-12 my-4 bg-secondary">
                      <div className="row align-items-center py-2">
                        <div className="col-sm-12 col-md-8 col-lg-9 col-xl-9">
                          <Typography variant="body1" className="text-white">Wish to save your details and manage your bookings on the go?</Typography>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-3 col-xl-3">
                          <Link to={{ pathname: "/auth", whatIsClicked: 0 }}>
                            <Button variant="contained" color="secondary" size="large" disableElevation>
                              <Typography color="primary">Sign Up Now</Typography>
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Divider />
              </div>
              <div className="mb-2">
                {/* <div>
                  <Typography variant="h6" color="primary">Do you wish to pay Now?</Typography>
                  <RadioGroup row aria-label="Do you wish to pay Now?" name="isInstantPayment" value={isInstantPayment} onChange={this.handleChange}>
                    <FormControlLabel value="yes" control={<Radio />} label="Yes, I am booking for myself" />
                    <FormControlLabel value="no" control={<Radio />} label="No, I am booking for someone" />
                  </RadioGroup>
                </div>
                <Divider /> */}
                <Typography variant="h6">Choose your payment method</Typography>
                <RadioGroup aria-label="payment Method" value={paymentMethod} name="paymentMethod" onChange={this.handleChange}>
                  <div className="d-flex flex-column mb-4">
                    <div className="d-flex justify-content-between">
                      <FormControlLabel value="paypal" control={<Radio color="primary" />} label="PayPal" />
                      <Typography variant="h6" className="font-weight-bold">PayPal</Typography>
                    </div>
                    <Typography variant="caption" color="textSecondary" className="w-75">Safe payment online. Credit card needed. Paypal account is not necessary</Typography>
                  </div>
                  <div className="d-flex flex-column">
                    <div className="d-flex justify-content-between">
                      <FormControlLabel value="credit-card" control={<Radio color="primary" />} label="Credit Card" />
                      <Typography variant="h6" className="font-weight-bold">Visa, MasterCard</Typography>
                    </div>
                  <Typography variant="caption" color="textSecondary" className="w-75">Safe payment online. Credit card needed. Paypal account is not necessary</Typography>
                  </div>
                </RadioGroup>
              </div>
              <Divider />
              {/* <div className="col-12 p-0 my-3">
                <div className="row mb-3">
                  <div className="col-12">
                    <Typography variant="h6" className="mb-2">Enter your credit card details</Typography>
                    
                    <TextField
                      onChange={this.handleChange}
                      variant="outlined"
                      label="Credit Card Number"
                      name="creditCardNumber"
                      id="creditCardNumber"
                      size="small"
                      fullWidth
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex">
                    <TextField
                      onChange={this.handleChange}
                      variant="outlined"
                      label="Expiry Date (MM)"
                      name="expiryDateMM"
                      id="expiryDateMM"
                      size="small"
                      className="mr-2"
                      fullWidth
                    />
                    <TextField
                      onChange={this.handleChange}
                      variant="outlined"
                      label="Expiry Date (YY)"
                      name="expiryDateYY"
                      id="expiryDateYY"
                      size="small"
                      fullWidth
                    />
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <TextField
                      onChange={this.handleChange}
                      variant="outlined"
                      label="CVV Code"
                      name="cvvCode"
                      id="cvvCode"
                      size="small"
                      fullWidth
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 mb-3">
                    <TextField
                      onChange={this.handleChange}
                      variant="outlined"
                      label="Credit Card Name"
                      name="creditCardName"
                      id="creditCardName"
                      size="small"
                      fullWidth
                    />
                  </div>
                  <div className="col-12 mb-2">
                    <div className="row">
                      <div className="col-sm-12 col-md-5 col-lg-4 col-xl-4">
                        <FormControlLabel
                        control={<Checkbox checked={saveInformation} onChange={this.handleChange} name="saveInformation" />}
                        label="Save my credit card details"
                        />
                      </div>
                      <div className="col-sm-12 col-md-7 col-lg-8 col-xl-8">
                        <Alert severity="warning"><Typography variant="caption">You will be directed to create your account</Typography></Alert>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <Collapse in={paymentMethod === "credit-card"} timeout="auto" unmountOnExit>
                <Typography variant="h6" className="font-weight-bold mt-4 mb-3">Enter your credit card details</Typography>
                <CardSection />
              </Collapse>

              <Snackbar
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                open={isRequestError}
                autoHideDuration={6000}
                onClose={this.handleErrorClose}
              >
                <Alert onClose={this.handleErrorClose} variant="filled" severity="error">{ isRequestErrorMessage }</Alert>
              </Snackbar>
            
              <Snackbar
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                open={isRequestWarning}
                autoHideDuration={6000}
                onClose={this.handleWarningClose}
              >
                <Alert onClose={this.handleErrorClose} variant="filled" severity="warning">{isRequestWarningMessage}</Alert>
              </Snackbar>
              <Button variant="contained" disabled={!this.props.stripe || isProcessing } type="submit" color="secondary" size="large" fullWidth>
                <Typography variant="body1" color="primary" className="font-weight-bold">Reserve Now</Typography>
              </Button>
            </form>
          }
        </div>
      </div>
    );
  }
}

export default function InjectedCheckoutForm(props) {
  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <CheckoutForm stripe={stripe} elements={elements} selectedHotel={props.selectedHotel} />
      )}
    </ElementsConsumer>
  );
}