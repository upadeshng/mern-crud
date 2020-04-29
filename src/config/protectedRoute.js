
import React from 'react';
import {Route, Redirect} from 'react-router-dom';

export const ProtectedRoute = ({component: Component, ...rest}) => {

  

  return <Route {...rest} render={(props)=>{
      return <Component {...props} />
      //return localStorage.getItem('jwt') ? <Component {...props} /> : <Redirect to="/login" />
  }} />

}