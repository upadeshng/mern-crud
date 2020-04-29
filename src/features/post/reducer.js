import {GET_POST, VALIDATION_ERRORS, DELETED_POST, GET_ALL_POST, GET_EXPENSE_TYPE} from './action'

const initialState = {
    data: [],
    loading: true,
    error:null,
}

export default (state = initialState, action)=>{

    
    switch(action.type){
        
       
        case GET_POST:{
            return{
                ...state,
                postData: action.payload,
                loading: false,
            }
        }
       
       
        case VALIDATION_ERRORS:{
            return{
                ...state,
                validationErrors: action.data,
            }
        }
       
       
        case DELETED_POST:{
            return{
                ...state,
                isDeleted: action.isDeleted,
            }
        }
       
       
        case GET_EXPENSE_TYPE:{
            return{
                ...state,
                expenseType: action.payload,
                loading: false,
            }
        }
       
       
        case GET_ALL_POST:{
            return{
                ...state,
                postListingData: action.payload,
                loading: false,
            }
        }
       
        default:{

            return state
        }
    }

}