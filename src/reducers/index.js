import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import authReducer from './auth.reducer';
import compReducer from './comp.reducer';
import setupReducer from './setup.reducer';
import {reducer as form} from 'redux-form';

const rootReducer = combineReducers({
  auth: authReducer,
  comp: compReducer,
  setup: setupReducer,
  form,
  routing: routerReducer
});

export default rootReducer;
