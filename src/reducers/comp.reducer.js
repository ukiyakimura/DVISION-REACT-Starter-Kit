import {
    TOGGLE_DRAWER_IN_APPBAR,
    FETCHING_TAB, 
    FETCHED_TAB, 
    FETCH_TAB_ERROR
} from '../constants/actionTypes';
import initialState from './initialState';
import objectAssign from 'object-assign';

const compReducer = (state = initialState.comp, action) => {
    switch (action.type) {
        case TOGGLE_DRAWER_IN_APPBAR:
            return Object.assign({}, state, {openDrawerStatus: action.openStatus});

        case FETCHING_TAB:
            return Object.assign({}, state, {
                api: {
                    isLoading: true,
                    error: false,
                    warning: null
                }
            });
        
        case FETCHED_TAB:
            return Object.assign({}, state, {
                api: {
                    isLoading: false,
                    error: false,
                    warning: null
                },
                setupTabTitles: action.payload
            });

        case FETCH_TAB_ERROR:
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

export default compReducer;