import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';

import footer from './footer';

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  footer
});
