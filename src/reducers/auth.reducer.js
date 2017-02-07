import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    LOGOUT_USER,
    USER_INFO_SUCCESS,
} from '../constants/actionTypes';
import initialState from './initialState';
import objectAssign from 'object-assign';

const authReducer = (state = initialState.auth, action) => {
    switch (action.type) {
        case USER_INFO_SUCCESS:
            return objectAssign({}, state, {userinfo: action.payload.data});
           
        case AUTH_USER:
            return objectAssign({}, state, {authenticated: true});

        case LOGOUT_USER :  
            return Object.assign({}, state, {authenticated : false});
        

        case AUTH_ERROR:
            return objectAssign({}, state, {error: action.payload});
    
        default:
            return state;
    }
};

export default authReducer;