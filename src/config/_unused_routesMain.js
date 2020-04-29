// import React from 'react';

// import {BrowserRouter as Router, Switch, Route, Link, withRouter, NavLink} from 'react-router-dom'
// import {Modal, Button, Row, Col, Form, Nav, NavDropdown, Navbar} from 'react-bootstrap';
// import {isLoggedIn, loggedInUser, getSessionPharmacyId} from '../common'




//   const NavMain = () => {

//     let is_logged_in = isLoggedIn();
//     let pharmacy_id = getSessionPharmacyId();
  
  
//     return (
//         <div> 
//             <Navbar bg="light" expand="lg">
//                 <NavLink exact activeClassName="selected" className="navbar-brand" to="/login" style={is_logged_in ? {display: 'none'} : {display: 'block'}}>Login</NavLink>
//                 <NavLink exact activeClassName="selected" className="navbar-brand" to="/profile">Medikoma</NavLink>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                 <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="mr-auto">
//                     <NavLink exact activeClassName="selected" className="nav-link" to="/profile" style={is_logged_in ? {display: 'block'} : {display: 'none'}}>Profile</NavLink>
//                     <NavLink exact activeClassName="selected" className="nav-link" to="/pharmacy/detail" style={is_logged_in && pharmacy_id ? {display: 'block'} : {display: 'none'}}>Pharmacy</NavLink>
//                     <NavLink exact activeClassName="selected" className="nav-link" to="/logout" style={is_logged_in ? {display: 'block'} : {display: 'none'}}>Logout</NavLink>
//                 </Nav>
//                 </Navbar.Collapse>
//             </Navbar>
//         </div>
  
//     )
//   }
  

//   export default NavMain;