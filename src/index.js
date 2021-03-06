/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
require('./favicon.ico'); // Tell webpack to load favicon.ico
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
import { syncHistoryWithStore } from 'react-router-redux';

require('jquery');

import { ThemeSwitcher } from 'react-bootstrap-theme-switcher';

const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
      <ThemeSwitcher defaultTheme="default" themePath="/theme-switcher/themes" storeThemeKey="theme">
        <Router history={history} routes={routes} />
      </ThemeSwitcher>
    </Provider>, document.getElementById('app')
);
