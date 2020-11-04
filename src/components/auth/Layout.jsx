import React, { Component } from 'react';
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import SignIn from './SignIn';
import SignUp from './SignUp';

function TabContainer(props) {
    return (
        <Typography component="div" className="pt-4">
            {props.children}
        </Typography>
    );
}

class Auth extends Component {
    state = {
        activeTabIndex: this.props.location.whatIsClicked ? this.props.location.whatIsClicked : 0, //determine the tab to show based on what's clicked
    }

    handleTabChange = (event, value) => {
        this.setState({ activeTabIndex: value });
    }

    render() {
		const { activeTabIndex } = this.state;
        return (
            <div className="container mt-3">
				<div className="row my-auto" style={{height:'100vh'}}>
                    {/* <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3"></div> */}
					<div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                <Paper elevation={1} className="p-4">
                                    <Paper square>
                                        <Tabs
                                            value={activeTabIndex}
                                            onChange={this.handleTabChange}
                                            aria-label="Hotel Detail Tab"
                                            indicatorColor="primary"
                                            textColor="primary"
                                            variant="fullWidth"
                                            scrollButtons="auto"
                                        >
                                            <Tab label="Register" />
                                            <Tab label="Sign In" />
                                        </Tabs>
                                    </Paper>
                                    { activeTabIndex === 0 && <TabContainer><SignUp /></TabContainer> }
                                    { activeTabIndex === 1 && <TabContainer><SignIn /></TabContainer> }
                                </Paper>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 my-auto">
                                <div>
                                    <Typography variant="h6" color="secondary" className="mb-4 font-weight-bold">Benefits of being a <Typography variant="h6" color="primary" className="font-weight-bold" component="span">Registered User</Typography></Typography>
                                    <Typography variant="body1" className="mb-2">Save your payment methods to book even faster.</Typography>
                                    <Typography variant="body1" className="mb-2">Save your payment methods to book even faster.</Typography>
                                    <Typography variant="body1" className="mb-2">Save your payment methods to book even faster.</Typography>
                                    <Typography variant="body1" className="mb-2">Save your payment methods to book even faster.</Typography>
                                    <Typography variant="body1" className="mb-2">Save your payment methods to book even faster.</Typography>
                                </div>
                            </div>
                        </div>
					</div>
                    {/* <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3"></div> */}
				</div>
			</div>
        );
    }
}
 
export default Auth;