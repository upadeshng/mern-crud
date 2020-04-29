import axios from 'axios'
import { push } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { useParams } from 'react-router-dom';
import { toast } from "react-toastify";
import {withRouter} from 'react-router-dom';
import {salesbill_api} from '../../constant/api'

import {history} from '../../_helpers/history'

import { browserHistory } from 'react-router'
import {apiBaseUrl} from '../../constant/api'
const apiUrl = apiBaseUrl + '/site';

export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const VALIDATION_ERRORS = 'VALIDATION_ERRORS';


export const submitLogin=(data, history)=>{

    return (dispatch, getState) => {
        
        axios.post(`${apiUrl}/login`, data )
            .then(response=>{

                if (response.data.result === 'SUCCESS'){
                    
                    /* store in local storage */
                    localStorage.setItem('currentUser', JSON.stringify(response.data.user));
                    localStorage.setItem('jwt', response.data.token);

                    var d = localStorage.getItem('currentUser');
                    console.log('here is',d)

                    history.push("/post/list")

                    dispatch({type: SUBMIT_LOGIN, payload: {'payload': response}})
                
                } else if (response.data.result === 'ERROR'){

                    toast.error(response.data.message);
                }

                // set & dispatch validation NULL
                dispatch({type: VALIDATION_ERRORS, data: {}})

            })
            .then(() => {
                // history.push(`/index`)
            })
            .catch(error => { 
            
                // // validation error
                if(error.response && error.response.status && error.response.status === 422){
                    toast.error('Validation Error!!');
                    dispatch({type: VALIDATION_ERRORS, data: error.response.data})
                }
            
            });


            //dispatch({type: SUBMIT_LOGIN, payload: {'payload': []}})
    };

}


export const logout=()=>{

    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    // currentUserSubject.next(null);

}

