import {
    FETCHING_PERIOD,
    FETCHED_PERIOD,
    FETCH_ERROR,
} from '../constants/actionTypes';

/* 
    https://github.com/taylorhakes/fecha 
    this library handle DateTime Formatting
*/
import fecha from 'fecha'; 

import axios from 'axios';
const ROOT_URL = 'http://localhost:8000';

export function getPeriod(isActive){
    return function(dispatch){
        axios.get(`${ROOT_URL}/api/setup/getPeriod/${isActive}`,
        {
            headers:{authorization:`Bearer `+localStorage.getItem('laravel_user_token')}
        }
        ).then(response => {
            dispatch({type: FETCHED_PERIOD,
                payload: response.data.activePeriod
            });
        })
        // .catch(()=>{
        //      dispatch({type: FETCH_ERROR,});
        // });
    }
}

export function createPeriod(data){
    return function(dispatch){

        let formData = new FormData();
        formData.append("periodName", data.periodName);
        formData.append("startDate", fecha.format(data.startDate, 'YYYY-MM-DD'));
        formData.append("endDate", fecha.format(data.endDate, 'YYYY-MM-DD'));
        formData.append("remark", data.remark);
        formData.append("isActive", 1);

        dispatch({type: FETCHING_PERIOD});
        axios.post(`${ROOT_URL}/api/setup/createPeriod`,formData,
        {
            headers:{authorization:`Bearer `+localStorage.getItem('laravel_user_token')}
        }
        ).then(response => {
            let result = {
                "periodName": data.periodName,
                "startDate": fecha.format(data.startDate, 'YYYY-MM-DD'),
                "endDate": fecha.format(data.endDate, 'YYYY-MM-DD'),
                "remark": data.remark,
                "isActive": '1'
            }
            dispatch({type: FETCHED_PERIOD,
                payload: [result]
            });
        }).catch(()=>{
             dispatch({type: FETCH_ERROR,
            });
        });
    }
}
