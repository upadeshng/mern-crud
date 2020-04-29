
import React from 'react';
import {Route, Redirect} from 'react-router-dom';

export const ProtectedPharmacyRoute = ({component: Component, ...rest}) => {
  return <Route {...rest} render={(props)=>{
      return localStorage.getItem('jwt') && localStorage.getItem('pharmacy') ? <Component {...props} /> : <Redirect to="/login" />
  }} />

}