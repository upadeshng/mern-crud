
// https://appdividend.com/2018/11/11/react-crud-example-mern-stack-tutorial/

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link, withRouter, NavLink} from 'react-router-dom'
import {Modal, Button, Row, Col, Form, Nav, NavDropdown, Navbar} from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

import store from './redux/store'
import {Provider} from 'react-redux'
import Login from './features/site/login/index'
import Logout from './features/site/logout/index'


import NavProfile from './config/navProfile';

/* importing style */
import styles from './assets/css/styles.css';
import "react-datepicker/dist/react-datepicker.css";

import { Redirect } from 'react-router-dom'
import {ProtectedRoute} from './config/protectedRoute'
import {ToastContainer} from 'react-toastify'


import PostCreate from './features/post/create'
import PostView from './features/post/view'
import PostEdit from './features/post/edit'
import PostList from './features/post/list'

const  App = () => {
  
  return (

    <Provider store={store}>

      <div style={{marginLeft: '20px', marginRight: '20px'}}>
        <ToastContainer autoClose={5000} />
          <Router basename={'/pharma'}>
          {/* <Router basename={'/'}> */}
                {/* <NavMain /> */}
                <Route exact path='/login' component={ Login } />
                <ProtectedRoute exact path='/logout' component={ Logout } />
                {/* <ProtectedRoute exact path='/' component={ NavProfile } /> */}
                <ProtectedRoute path='/' component={ NavProfile } />
          

            <ProtectedRoute path='/post/create' component={ PostCreate } />
            <ProtectedRoute  path='/post/view/:id' component={ PostView } />
            <ProtectedRoute  path='/post/edit/:id' component={ PostEdit } />
            <ProtectedRoute  path='/post/list' component={ PostList } />

           
          </Router>
          
        </div>
    
    </Provider>
  );

}

export default App;
