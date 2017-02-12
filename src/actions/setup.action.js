import {
    GET_PERIOD,
} from '../constants/actionTypes';

import axios from 'axios';
const ROOT_URL = 'http://localhost:8000';

export function getPeriod(isActive){
    return function(dispatch){
        axios.get(`${ROOT_URL}/api/setup/getPeriod/${isActive}`,
        {
            headers:{authorization:`Bearer `+localStorage.getItem('laravel_user_token')}
        }
        ).then(response => {
                dispatch({type: GET_PERIOD,
                    payload: response.data.activePeriod
                });
            });
    }
}
