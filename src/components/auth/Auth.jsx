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
        activeTabIndex: 0,
    }

    handleTabChange = (event, value) => {
        this.setState({ activeTabIndex: value });
    }

    render() {
		const { activeTabIndex } = this.state;
        return (
            <div className="container-fluid mt-3">
				<div className="row my-auto" style={{height:'100vh'}}>
                    <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3"></div>
					<div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <Paper square>
						    <Tabs
						  		value={this.state.activeTabIndex}
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
					</div>
                    <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3"></div>
				</div>
			</div>
        );
    }
}
 
export default Auth;