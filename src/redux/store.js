// import {createStore,applyMiddleware} from 'redux'
// import logger from 'redux-logger'
// import thunk from 'redux-thunk'
// import allReducer from './reducer'

//export default createStore(allReducer,applyMiddleware(logger,thunk))

import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import allReducer from './reducer'
export default createStore(allReducer, applyMiddleware(thunk))