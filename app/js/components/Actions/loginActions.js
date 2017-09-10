
import React, { Component } from 'react';
import axios from 'axios';
import Uri from 'jsuri';
import setAuthorizationToken from '../../utils/setAuthorizationToken.js';
//import { SET_CURRENT_USER } from './types.js';
import {
  LOGIN_REQUEST,
  LOGIN_FAIL, //eslint-disable-line no-unused-vars
  LOGIN_SUCCESS,
    LOGIN_RESPONSE,
  LOGOUT_SUCCESS
} from '../../constants/User.js';
import {
  ROUTING
} from '../../constants/Routing.js';
let userAPI;
let token;

 export function login(payload) {
   return (dispatch) => {

     // dispatch({type: LOGIN_REQUEST,
     //     payload : loginActions()
     // })
       dispatch(loginActions(payload))

       dispatch({
         type: LOGIN_SUCCESS,
         payload: {
           name: payload.name,
           isAuthenticated: true
         }
       })
       dispatch(getData())
       dispatch({
         type: ROUTING,
         payload: {
           method: 'push',
           nextUrl: '/main'
         }
       })
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
		 	localStorage.setItem('accessToken', res.data.access_token);
             localStorage.setItem('expires_in', res.data.expires_in);
             localStorage.setItem('refreshToken', res.data.refresh_token);
             localStorage.setItem('id', res.data.user_id);

             token = localStorage.getItem('accessToken');
             console.log(token);
		 	setAuthorizationToken(token);

		 });
              dispatch({ type: 'LOGIN_REQUEST', payload: data });
	}
}
const id  = window.localStorage.getItem('id');
 export const getData = () => dispatch => {
         return axios({
             method: 'get',
                url: 'https://webmaster-api.ordinec.ru/v1/users/'+id,
             headers: {Authorization: 'Bearer ' + localStorage.getItem('accessToken')}
             }).then( res => {
           userAPI = res.data;
           console.log(userAPI);
         });

        dispatch({ type: 'LOGIN_RESPONSE', payload: userAPI });
 }
