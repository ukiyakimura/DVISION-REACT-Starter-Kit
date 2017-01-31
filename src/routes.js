import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
// import Test from './components/Test';
import LoginPage from './containers/LoginPage';
import Homepage from './components/HomePage';
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Homepage}/>
    <Route path="login" component={LoginPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
