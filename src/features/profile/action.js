import axios from 'axios'
import { toast } from "react-toastify";
import {history} from '../../_helpers/history'

import { browserHistory } from 'react-router'

import {apiBaseUrl} from '../../constant/api'
const apiUrl = apiBaseUrl + '/user';


export const GET_PROFILE = 'GET_PROFILE';
export const VALIDATION_ERRORS = 'VALIDATION_ERRORS';

export const getProfile = ()=>{
    return (dispatch)=>{
            axios.get( apiUrl+'/profile', 
            { 
               headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json',
                }
            })
            .then(response=>{

                dispatch({type: GET_PROFILE, payload: response.data})
            
            }).catch((e)=>console.log(e))
    }
}

export const postUpdateUser=(data, history)=>{

    return (dispatch)=>{
        
        console.log('ddd', data)

        return axios.put(`${apiUrl}/${data._id}`, data,
            {
               headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json',
                }
            }
            
        )
        
        .then(response => {
            const data = response.data;
            console.log(data);

            if(response.data.result === 'SUCCESS'){
                toast.success('Profile updated successfully!');
                history.push("/")

            }else if(response.data.result == 'ERROR'){
                toast.error(response.data.message);
            }

            // set & dispatch validation NULL
            dispatch({type: VALIDATION_ERRORS, data: {}})
        })
        .then(() => {

        })
        .catch(error => { 
            
            // // validation error
            if(error.response && error.response.status && error.response.status === 422){
                toast.error('Validation Error!!');
                dispatch({type: VALIDATION_ERRORS, data: error.response.data})
            }
        
        });
    }
}

