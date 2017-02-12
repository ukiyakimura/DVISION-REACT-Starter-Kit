import {
    TOGGLE_DRAWER_IN_APPBAR,
    GET_SETUP_TAB_TITLES,
} from '../constants/actionTypes';
import initialState from './initialState';
import objectAssign from 'object-assign';

const compReducer = (state = initialState.comp, action) => {
    switch (action.type) {
        case TOGGLE_DRAWER_IN_APPBAR:
            return Object.assign({}, state, {openDrawerStatus: action.openStatus});

        case GET_SETUP_TAB_TITLES:
            return { 
                 ...state,
                setupTabTitles: [...state.setupTabTitles, ...action.payload]
             }

        default:
            return state;
    }
};

export default compReducer;