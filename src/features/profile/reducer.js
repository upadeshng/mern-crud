import {VALIDATION_ERRORS, GET_PROFILE} from './action'

const initialState = {
    data: [],
    loading: true,
}

export default (state = initialState, action)=>{
    
    switch(action.type){
        
        case VALIDATION_ERRORS:{
            return{
                ...state,
                validationErrors: action.data,
            }
        }

        case GET_PROFILE:{

            return {
                ...state,
                data: action.payload,
                loading: false,

            }
        }

        default: return state
        
    }

}