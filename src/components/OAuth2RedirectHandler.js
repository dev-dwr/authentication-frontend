import {Redirect, useLocation} from 'react-router-dom'
import React  from 'react';

const OAuth2RedirectHandler = () => {
    const routerLocation = useLocation();

    const getUrlParameter = (name) => {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

        let results = regex.exec(routerLocation.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    const token = getUrlParameter('token');
    const error = getUrlParameter('error');

    if(token) {
        localStorage.setItem("access_token", token);
        return <Redirect to={{
            pathname: "/",
            state: { from: routerLocation.pathname }
        }}/>;
    } else {
        return <Redirect to={{
            pathname: "/login",
            state: {
                from: routerLocation.pathname,
                error: error
            }
        }}/>;
    }
}


export default OAuth2RedirectHandler;