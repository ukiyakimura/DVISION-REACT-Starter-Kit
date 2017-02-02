import axios from 'axios';
import jwtdecode from 'jwt-decode';
import {browserHistory} from 'react-router';
import {
    AUTH_USER,
    AUTH_ERROR,
    USER_INFO_SUCCESS,
    USER_INFO,
    LOGOUT_USER,
} from '../constants/actionTypes';

const ROOT_URL = 'http://localhost:8000';

// User and Auth actions
// 
export function loginUser(data){
    return function(dispatch){
        console.log('LOGIN PROCESS');
        axios.post(`${ROOT_URL}/api/auth/login`,data)
            .then(response => {
                dispatch({type: AUTH_USER,
                    payload:response.data.token
                });
                localStorage.setItem('laravel_user_token',response.data.token);
                console.log('Login Success');
                browserHistory.push("/");
            }).catch(()=>{
            dispatch(authError("Empty Required Field"));
        });
    }
}

export function logoutUser() {
    console.log("logout");
    localStorage.removeItem('laravel_user_token');
    return { type: LOGOUT_USER };
}


export function registerUser({email,password}){
    return function(dispatch){
        axios.post(`${ROOT_URL}/api/auth/signup`,{email,password})
            .then(response =>{
                dispatch({type:AUTH_USER});
                localStorage.setItem('laravel_user_token',response.data.token);
                browserHistory.push('/register');
            })
            .catch(response => dispatch(authError(response.data.error)));
    }
}

export function userInfo(){
    return dispatch => {
        axios.get(`${ROOT_URL}/v1/api/auth/userinfo`,
            {
                headers:{authorization:`Bearer`+localStorage.getItem('laravel_user_token')}
            }).then(response => {
            dispatch({
                type: USER_INFO_SUCCESS,
                payload: response
            })
        })
    }
}

export function authError(error){
    return {
        type:AUTH_ERROR,
        payload:error
    }
}


