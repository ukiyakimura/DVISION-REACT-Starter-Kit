/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

require('./favicon.ico'); // Tell webpack to load favicon.ico
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
import { syncHistoryWithStore } from 'react-router-redux';
import { store } from './store/store';
import DevTools from './components/helper/DevTools'; // React DevTools

// import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();



// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

// Divide environment
if (process.env.NODE_ENV === 'production') {
    render(
    <MuiThemeProvider>
      <Provider store={store}>
          <Router history={history} routes={routes} />
      </Provider>
    </MuiThemeProvider>
      , document.getElementById('app')
    );

} else {
    render(
    <MuiThemeProvider>
      <Provider store={store}>
        <div>
          <Router history={history} routes={routes} />
          <DevTools />
        </div>
      </Provider>
    </MuiThemeProvider>
      , document.getElementById('app')
    );
}

