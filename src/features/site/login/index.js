import React, { Component } from 'react';
// import {Router, Route, Switch} from 'react-router'
import Form from './form';
import {isLoggedIn, loggedInUser} from '../../../common'

import {BrowserRouter as Router, Link} from 'react-router-dom'

import {history} from '../../../_helpers/history'

class Login extends Component {

    componentDidMount() {

        if (loggedInUser()) {
            console.log('aaaalready logged in!')
            this.props.history.push("/profile")
        }
        
      }


    render() {


        // console.log('here it is', process.env)

        return (<>

            <div className="login-container">
            <Form />

            </div>
            </>);
    }
    
}


export default Login;
