import axios from 'axios'
import { toast } from "react-toastify";
import {apiBaseUrl} from '../../constant/api'
const apiUrl = apiBaseUrl + '/post';

export const GET_ALL_POST = 'GET_ALL_POST';
export const GET_EXPENSE_TYPE = 'GET_EXPENSE_TYPE';
export const UPDATE_EXPENSE_TYPE = 'UPDATE_EXPENSE_TYPE';
export const GET_ALL_EXPENSE_TYPE_PAYMENTS = 'GET_ALL_EXPENSE_TYPE_PAYMENTS';
export const DELETED_POST = 'DELETED_POST';

export const GET_POST = 'GET_POST';
export const VALIDATION_ERRORS = 'VALIDATION_ERRORS';


export const createComment=(postId, data, history)=>{

    return (dispatch)=>{
        data['userId'] = 22
        return axios.post(`${apiBaseUrl}/comment/${postId}`, data, 
        { 
           headers: {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            'Content-Type': 'application/json',
            }
        })
        
        .then(response => {

            console.log('resp',response)


            if(response.data.result === 'SUCCESS'){
                toast.success('Comment posted successfully!');
                history.push("/post/view/" + response.data.post._id)
                dispatch({type: GET_POST, payload: response.data.post})
            }

            // set & dispatch validation NULL
            dispatch({type: VALIDATION_ERRORS, data: {}})
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

export const getPost=(id)=>{

    return (dispatch)=>{

        axios.get(`${apiUrl}/${id}`/* , { 
           headers: {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            'Content-Type': 'application/x-www-form-urlencoded',
            }
        } */)
            .then(response=>{

                console.log('here is response:', response)

                dispatch({type: GET_POST, payload: response.data})
            
            }).catch((e)=>console.log(e))
    }
}

export const create=(data, history)=>{

    return (dispatch)=>{
        data['userId'] = 22
        return axios.post(`${apiUrl}`, data, 
        { 
           headers: {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            'Content-Type': 'application/json',
            }
        })
        
        .then(response => {

            console.log('resp',response)


            if(response.data.result === 'SUCCESS'){
                toast.success('Post added successfully!');
                history.push("/post/view/" + response.data.item._id)

            }

            // set & dispatch validation NULL
            dispatch({type: VALIDATION_ERRORS, data: {}})
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

export const deletePost=(id)=>{

    return (dispatch, getState)=>{
        
        return axios.delete(`${apiUrl}/${id}`/* , 
        { 
           headers: {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            'Content-Type': 'application/x-www-form-urlencoded',
            }
        } */)
        
        .then(response => {

            dispatch({type: DELETED_POST, isDeleted: false})
            if(response.data.result === 'SUCCESS'){
                toast.success('Post deleted successfully!');
                dispatch({type: DELETED_POST, isDeleted: true})

            }else if(response.data.result == 'ERROR'){
                toast.error(response.data.message);
            }
        })
        .then(() => {
            //    history.push(`/index`)
            // createBrowserHistory.push('/index')
            // dispatch(push(`/index`));

        })
        .catch(error => { throw(error) });
    }
}

export const update=(data, history)=>{

    return (dispatch)=>{
        
        return axios.put(`${apiUrl}/${data.id}`, data, 
        { 
           headers: {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            'Content-Type': 'application/json',
            }
        })
        
        .then(response => {
            const data = response.data;
            console.log(data);

            if(response.data.result === 'SUCCESS'){
                toast.success('Post updated successfully!');
                history.push("/post/view/" + response.data.item._id)

            }else if(response.data.result == 'ERROR'){
                toast.error(response.data.message);
            }

            // set & dispatch validation NULL
            dispatch({type: VALIDATION_ERRORS, data: {}})
        })
        .catch(error => { 
            
            // validation error
            if(error.response && error.response.status && error.response.status === 422){
                toast.error('Validation Error!!');
                dispatch({type: VALIDATION_ERRORS, data: error.response.data})
            }
        
        });
    }
}

export const getAll=(param)=>{
    param = new URLSearchParams(param).toString();


    return (dispatch)=>{

        axios.get(`${apiUrl}?${param}`, 
        { 
           headers: {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            'Content-Type': 'application/json',
            }
        })
            .then(results=>{

                dispatch({type: GET_ALL_POST, payload: results.data})
            
            }).catch((e)=>console.log(e))
    }
}
