import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import auth from './auth/Auth';

//this components returns a route with the component that's passed in

const ProtectedRoute = ({ component: Component, ...rest}) => {
    return (
        <Route
            {...rest} 
            render={props => {
                // if(auth.isAuthenticated()){
                    return <Component {...props} />
                // }
                // else {
                //     return <Redirect to={
                //         {
                //             pathname: '/',
                //             state: {
                //                 from: props.location
                //             }
                //         }
                //     } />
                // }
            }}
        />
    );
}

export default ProtectedRoute;