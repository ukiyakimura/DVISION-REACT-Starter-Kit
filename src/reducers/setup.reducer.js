import {FETCHING_PERIOD, FETCHED_PERIOD, FETCH_PERIOD_ERROR} from '../constants/actionTypes';
import initialState from './initialState';

const setupReducer = (state = initialState.setup, action) => {
    switch (action.type) {
        case FETCHING_PERIOD:
            return Object.assign({}, state, {
                api: {
                    isLoading: true,
                    error: false,
                    warning: null
                }
            });
        
        case FETCHED_PERIOD:
        console.log(state.periodData.length);
            if(state.periodData.length < 2){
                return {...state, 
                    api: {
                        isLoading: false,
                        error: false,
                        warning: null
                    },
                    periodData: [...action.payload]
                };
            }else{
                return {...state,
                    api: {
                        isLoading: false,
                        error: false,
                        warning: null
                    }, 
                    periodData: [...state.periodData, ...action.payload]}
            }
    
           

        case FETCH_PERIOD_ERROR:
            return Object.assign({}, state, {
                api: {
                    isLoading: false,
                    error: true,
                    warning: null
                }
            });

        default:
            return state;
    }
};

export default setupReducer;