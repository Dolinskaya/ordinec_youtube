import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';
//import auth from './authReducer.js'
//import footer from './footer';
import user from '../reducers/user.js';
import info from '../reducers/info.js'

export const rootReducer = combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  auth: user,
    info: info
});
