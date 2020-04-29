import React from 'react';

import {BrowserRouter as Router, Switch, Route, Link, withRouter, NavLink } from 'react-router-dom'


import Profile from '../features/profile/view'
import ProfileEdit from '../features/profile/edit'

import {ProtectedRoute} from './protectedRoute'


const NavProfile = () => {

    
    return (<>

              <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{marginBottom: '20px'}}>
               
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                 <ul className="navbar-nav mr-auto">
                 
                 <li className="nav-item">
                 <NavLink exact activeClassName="selected" className="nav-link" to="/">Profile</NavLink>
                 </li>
                 
                 
                 <li className="nav-item">
                 <NavLink exact activeClassName="selected" className="nav-link" to="/post/list">Post</NavLink>
                 </li>
                 
                 <li className="nav-item" style={{position: 'absolute', right: 0}}>
                 <NavLink exact activeClassName="selected" className="nav-link" to="/logout">Logout</NavLink>
                 </li>
                   
                 </ul>
               </div>
 
             </nav>
            
          <ProtectedRoute path='/profile/edit' component={ ProfileEdit } />
          <ProtectedRoute exact path='/' component={ Profile } />
          {/* <ProtectedRoute exact path='/profile' component={ Profile } /> */}

           
          </>)
  }

  export default NavProfile;