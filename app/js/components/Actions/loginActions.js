
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
let token;

 export function login(payload) {
   return (dispatch) => {

     dispatch(loginActions(payload))
       // dispatch(loginActions(payload))
       //
       // dispatch({
       //   type: LOGIN_SUCCESS,
       //   payload: {
       //     name: payload.username,
       //     isAuthenticated: true
       //   }
       // })
       // dispatch({
       //   type: ROUTING,
       //   payload: {
       //     method: 'push',
       //     nextUrl: '/main'
       //   }
       // })
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
		     dispatch({
                 type: LOGIN_SUCCESS,
                 payload: {
                     name: data.username,
                     isAuthenticated: true,
                     getToken: res.data
                 }
             })
             localStorage.setItem('accessToken', res.data.access_token);
             localStorage.setItem('refreshToken', res.data.refresh_token);
             localStorage.setItem('user_id', res.data.user_id);
             localStorage.setItem('expires_in', res.data.expires_in);
             dispatch({
                 type: ROUTING,
                 payload: {
                     method: 'push',
                     nextUrl: '/main'
                 }
             })

		 })
             .catch(result => {
                 dispatch({
                     type: 'LOGIN_FAIL',
                     errors: res.statusText
                 })
             })
	}
}




export function loadInfo() {
    return dispatch => {

        dispatch(getData());
    }
}


const id  = window.localStorage.getItem('id');
export const getData = () => dispatch => {
    return axios({
        method: 'get',
        url: 'https://webmaster-api.ordinec.ru/v1/users/'+id,
        headers: {Authorization: 'Bearer ' + localStorage.getItem('accessToken')}
    }).then( res => {
        dispatch({
            type: 'LOAD_INFO_OK',
            info: res.data
        })
    })
        .catch(res => {
            dispatch({
                type: 'LOAD_INFO_FAIL',
                errors: res.statusText
            })
        })
}
