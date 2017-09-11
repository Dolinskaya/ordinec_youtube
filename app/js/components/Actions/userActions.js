
import React, { Component } from 'react';
import axios from 'axios';
import Uri from 'jsuri';
import setAuthorizationToken from '../../utils/setAuthorizationToken.js';
import {
    LOAD_INFO_REQUESTED,
    LOAD_INFO_OK,
    LOAD_INFO_FAIL
} from '../../constants/userInfo.js';


export function loadInfo() {
    return dispatch => {

        dispatch(getData());

        // getData();
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
        .catch(result => {
            dispatch({
                type: 'LOAD_INFO_FAIL',
                errors: result.statusText
            })
        })

        // userAPI = res.data;
        // console.log(userAPI);

    // dispatch({ type: 'LOGIN_RESPONSE', payload: userAPI });
}
