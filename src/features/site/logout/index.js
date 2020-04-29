import React, { Component } from 'react';
// import {Router, Route, Switch} from 'react-router'
import {isLoggedIn, loggedInUser, handleLogout} from '../../../common'

import {BrowserRouter as Router, Link} from 'react-router-dom'

import {history} from '../../../_helpers/history'

class Logout extends Component {

    componentDidMount() {

        handleLogout();
        this.props.history.push("/login")

      }


    render() {


        return (<>

            Logout screen
            
            </>);
    }
    
}


export default Logout;
