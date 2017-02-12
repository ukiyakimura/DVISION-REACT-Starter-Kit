import {
    TOGGLE_DRAWER_IN_APPBAR,
    GET_SETUP_TAB_TITLES,
} from '../constants/actionTypes';

import axios from 'axios';
const ROOT_URL = 'http://localhost:8000';

export function toggleDrawerInAppBar(open){
    return { type: TOGGLE_DRAWER_IN_APPBAR, openStatus: open }
}

export function getSetupTabTitles(category){
    return function(dispatch){
        axios.get(`${ROOT_URL}/api/component/getSetupTabTitles/${category}`,
        {
            headers:{authorization:`Bearer `+localStorage.getItem('laravel_user_token')}
        }).then(response => {
            dispatch({type: GET_SETUP_TAB_TITLES,
                payload: response.data.setupTabTitles
            });
        });
    }
}
