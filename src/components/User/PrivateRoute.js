import React from 'react';
import {
    Route,
    Redirect
} from "react-router-dom";
import { ACCESS_TOKEN } from '../../constants'


const PrivateRoute = ({ component: Component }) => (
    <Route
        render={props =>
            isAuthenticated() ? (
                <Component />
            ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                        }}
                    />
                )
        }
    />
);

export default PrivateRoute


function isAuthenticated() {

    if (localStorage.getItem(ACCESS_TOKEN) !== null) {

        return true
    }

    return false

}