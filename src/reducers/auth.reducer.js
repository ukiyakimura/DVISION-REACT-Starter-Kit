import {
    AUTH_USER,
    AUTH_ERROR,
    AUTH_USER_INFO,
    UNAUTH_USER,
} from '../constants/actionTypes';
import initialState from './initialState';

const authReducer = (state = initialState.auth, action) => {
    switch (action.type) {
        case AUTH_USER:
            return Object.assign({}, state, {authenticated: true});

        case AUTH_ERROR:
            return Object.assign({}, state, {error: action.payload});
    
        case AUTH_USER_INFO:
            return Object.assign({}, state, {userInfo: action.payload.userInfo});

        case UNAUTH_USER :  
            return Object.assign({}, state, {authenticated : false});

        default:
            return state;
    }
};

export default authReducer;