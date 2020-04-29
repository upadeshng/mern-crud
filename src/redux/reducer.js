import {combineReducers} from 'redux'
import loginReducer from '../features/site/reducer'
import profileReducer from '../features/profile/reducer'
import postReducer from '../features/post/reducer'

export default combineReducers({
    
    loginReducer: loginReducer,
    profileReducer: profileReducer,
    mernPostReducer: postReducer,
})