import {
    GET_PERIOD,
} from '../constants/actionTypes';
import initialState from './initialState';
import objectAssign from 'object-assign';

const setupReducer = (state = initialState.setup, action) => {
    switch (action.type) {
        case GET_PERIOD:
            return Object.assign({}, state, {periodData: action.payload});

        default:
            return state;
    }
};

export default setupReducer;