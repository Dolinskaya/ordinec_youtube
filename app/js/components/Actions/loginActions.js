
import React, { Component } from 'react';
import axios from 'axios';
import Uri from 'jsuri';
import setAuthorizationToken from '../../utils/setAuthorizationToken.js';
//import { SET_CURRENT_USER } from './types.js';
import {
  LOGIN_REQUEST,
  LOGIN_FAIL, //eslint-disable-line no-unused-vars
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS
} from '../../constants/User.js';
import {
  ROUTING
} from '../../constants/Routing.js';



// export function setCurrentUser(user){
// 	return {
// 		type: SET_CURRENT_USER,
// 		user
// 	}
// }

// export function logout() {
// 	return dispatch => {
// 		localStorage.removeItem('accessToken');
// 		setAuthorizationToken(false);
// 		dispatch(setCurrentUser({}));
// 	}
// }

 export function login(payload) {
   return (dispatch) => {

     dispatch({
       type: LOGIN_REQUEST
     })

     setTimeout(() => {
       dispatch({
         type: LOGIN_SUCCESS,
         payload: {
           name: payload.name,
           isAuthenticated: true
         }
       })

       dispatch({
         type: ROUTING,
         payload: {
           method: 'push',
           nextUrl: '/main'
         }
       })
     }, 2000)
   }
 }

 export function logout() {
   return {
     type: LOGOUT_SUCCESS
   }
 }


export function loginActions(data) {
	return dispatch => {
		 return axios.post('https://auth2.ordinec.ru/oauth2/token', data)
		 .then( res => {
		 	const token = res.data.access_token;
		 	console.log(token);

		 	localStorage.setItem('accessToken', token);
		 	setAuthorizationToken(token);
		 	dispatch(login(token));

		 });
	}
}
