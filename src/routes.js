import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import LoginPage from './containers/LoginPage';
import SetupPage from './containers/SetupPage';
import Homepage from './components/HomePage';
import NotFoundPage from './components/NotFoundPage';

// Set Routing Link View in ./components/App.js

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Homepage}/>
    <Route path="login" component={LoginPage}/>
    <Route path="setup" component={SetupPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
