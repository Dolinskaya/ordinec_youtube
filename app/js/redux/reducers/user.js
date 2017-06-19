
import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS
} from '../../constants/User.js';

const initialState = window.localStorage.getItem('accessToken') || {};

export default function userstate(state = initialState, action) {

  switch (action.type) {

    case LOGIN_REQUEST:
      // TODO
      return state

    case LOGIN_SUCCESS:
      return {...state, name: action.payload.name, isAuthenticated: action.payload.isAuthenticated}

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