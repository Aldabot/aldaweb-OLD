/*
 * Google Analytics
 */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                         m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-110991818-1', 'auto');
ga('send', 'pageview');


/*
 * UIKit
 */
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
// loads the Icon plugin
UIkit.use(Icons);


/*
 * React
 */
import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { verifySessionSaga } from './sagas/index.js';

import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';

import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux';

import aldaApp from './reducers/index';
import App from './app.jsx';

// routing
const history = createHistory();

// redux
const reactRouterMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();
const preloadState = {
    login: {
        isLoggedIn: false,
        sessionId: null
    },
    selectProvider: {
        provider: {},
        status: 'form',
        saltedgeLoginStatus: null
    },
}
let store = createStore(
    aldaApp,
    preloadState,
    applyMiddleware(reactRouterMiddleware, sagaMiddleware, logger)
);

// saga
applyMiddleware(sagaMiddleware);
sagaMiddleware.run(verifySessionSaga);

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Route path="/:filter?" component={App} />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)
