import React from 'react';
import {Router, Route, Switch} from 'react-router'

import Create from '../features/salesbill/create'
import Edit from '../components/edit.component'
import DrugList from '../features/drug/list'
import DrugEdit from '../features/drug/edit'
import Home from '../features/home/index'
import Profile from '../features/profile/index'
import Login from '../features/login/index'




function isLoggedIn() {
  
    var user = localStorage.getItem('currentUser');
    if(user) return user;
    
  }
  
function createRoutes(){
    return (
        <Switch>
            
            <Route exact path='/addsalesbill/:id' component={ Create } />

            {/* <Route path='/edit/:id' component={ Edit } /> */}
            <Route path='/index' component={ DrugList } />
            <Route path='/drug/edit/:id' component={ DrugEdit } />
            {/* <Route path='/drug/edit/:id' render={(props) => <DrugEdit {...props}/>}/> */}

        </Switch>
    )
}

export default createRoutes;