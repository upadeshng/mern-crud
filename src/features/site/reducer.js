import {VALIDATION_ERRORS, SUBMIT_LOGIN} from './action'

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
        
        case SUBMIT_LOGIN:{

            return {
                ...state,
                data: action.payload,
                loading: false,

            }
        }

        default: return state
        
    }

}