
import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS
} from '../../constants/User.js';


export default function userstate(state = {}, action) {

  switch (action.type) {

    case LOGIN_REQUEST:
      // TODO
      return state

    case LOGIN_SUCCESS:
      return {...state, name: action.payload.name, isAuthenticated: action.payload.isAuthenticated, data: action.payload.getToken}


    case LOGIN_FAIL:
      // TODO
      return state

    case LOGOUT_SUCCESS:
      // TODO
      return state

    default:
      return state
    }
}