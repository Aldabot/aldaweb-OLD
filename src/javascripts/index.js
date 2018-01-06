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
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { HashRouter, Route } from 'react-router-dom'
import aldaApp from './reducers/index'
import App from './app.js'
import logger from 'redux-logger'

const preloadState = {
  isLoggedIn: false
}

let store = createStore(
  aldaApp,
  preloadState,
  applyMiddleware(logger)
)

render(
  <Provider store={store}>
    <HashRouter>
      <Route path="/:filter?" component={App} />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
)
