import {
    TOGGLE_DRAWER_IN_APPBAR,
    FETCHING_TAB,
    FETCHED_TAB,
    FETCH_TAB_ERROR
} from '../constants/actionTypes';

import axios from 'axios';
const ROOT_URL = 'http://localhost:8000';

export function toggleDrawerInAppBar(open){
    return { type: TOGGLE_DRAWER_IN_APPBAR, openStatus: open }
}

export function getSetupTabTitles(category){
    return function(dispatch){
        dispatch({type: FETCHING_TAB});
        axios.get(`${ROOT_URL}/api/component/getSetupTabTitles/${category}`,
        {
            headers:{authorization:`Bearer `+localStorage.getItem('laravel_user_token')}
        }).then(response => {
            dispatch({type: FETCHED_TAB,
                payload: response.data.setupTabTitles
            });
        })
        // .catch(()=>{
        //      dispatch({type: FETCH_ERROR});
        // });
    }
}
