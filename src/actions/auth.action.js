import axios from 'axios';
import jwt_decode from 'jwt-decode';
import {browserHistory} from 'react-router';
import {
    AUTH_USER,
    AUTH_ERROR,
    AUTH_USER_INFO,
    UNAUTH_USER,
} from '../constants/actionTypes';

const ROOT_URL = 'http://localhost:8000';

// User and Auth actions
// 
export function loginUser(data){
    return function(dispatch){
        axios.post(`${ROOT_URL}/api/auth/login`,data)
            .then(response => {
                dispatch({type: AUTH_USER,
                    payload:response.data.token
                });
                localStorage.setItem('laravel_user_token',response.data.token);
                let decoded = jwt_decode(response.data.token);
                dispatch({
                    type: AUTH_USER_INFO,
                    payload:decoded
                });
                browserHistory.push("/");
            }).catch(()=>{
            dispatch(authError("Empty Required Field"));
        });
    }
}

export function logoutUser(dispatch){
    return () => {
        return new Promise((resolve) => { 
            dispatch({
                type: UNAUTH_USER,
            });
            localStorage.removeItem('laravel_user_token');
            resolve();
        })
    }
};

export function registerUser({email,password}){
    return function(dispatch){
        axios.post(`${ROOT_URL}/api/auth/signup`,{email,password})
            .then(response =>{
                dispatch({type: AUTH_USER});
                localStorage.setItem('laravel_user_token',response.data.token);
                browserHistory.push('/register');
            })
            .catch(response => dispatch(authError(response.data.error)));
    }
}

export function authError(error){
    return {
        type:AUTH_ERROR,
        payload:error
    }
}

// export function getUserInfo(){
//     return dispatch => {
//         axios.get(`${ROOT_URL}/v1/api/auth/userinfo`,
//             {
//                 headers:{authorization:`Bearer`+localStorage.getItem('laravel_user_token')}
//             }).then(response => {
//             dispatch({
//                 type: USER_INFO_SUCCESS,
//                 payload: response
//             })
//         })
//     }
// }




