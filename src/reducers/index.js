import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import authReducer from './auth.reducer';
import {reducer as form} from 'redux-form';

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  routing: routerReducer
});

export default rootReducer;
