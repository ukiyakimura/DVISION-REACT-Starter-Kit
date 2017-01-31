import * as types from '../actions/auth.action';
import initialState from './initialState';
import objectAssign from 'object-assign';

const authReducer = (state = initialState.auth, action) => {
    switch (action.type) {
        case USER_INFO_SUCCESS:
            console.log('USER_INFO_SUCCESS');
            return objectAssign({}, state, {userinfo: action.payload.data});
           
        case AUTH_USER:
            console.log('AUTH_USER');
             return objectAssign({}, state, {authenticated: true});
        
        case LOGOUT_USER:
            console.log('LOGOUT_USER');
             return objectAssign({}, state, {authenticated: false});
         
        case AUTH_ERROR:
         return objectAssign({}, state, {error: action.payload});
    
        default:
            return state;
    }
};