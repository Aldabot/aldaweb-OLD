import './modules';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import Axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import App from './react/app.js';

ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('root'))
// loads the Icon plugin
UIkit.use(Icons);

// Axios({
//   method:'get',
//   url:'https://api.aldabot.es/v1/session',
//   withCredentials:true
// })
//   .then(function(response) {
//   console.log(response)
// });

// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-110991818-1', 'auto');
ga('send', 'pageview');
