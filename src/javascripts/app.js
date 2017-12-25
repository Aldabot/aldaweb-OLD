import './modules';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import Axios from 'axios';
import $ from 'jquery';
const uuidv4 = require('uuid/v4');
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);

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




// Facebook SDK
window.fbAsyncInit = function() {
    FB.init({
      appId            : '1743051222670922',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v2.11'
    });

    FB.Event.subscribe('send_to_messenger', function(e) {
        // callback for events triggered by the plugin
        console.log(e);
        // if messenger opt-in successfull save uuid cookie
        // ( the uuid has also been given to the messenger webhook and is connected to the PSID )
        if (e.event == 'opt_in') {
          const uuid = uuidv4();
          $(".fb-send-to-messenger").attr("data-ref", uuid);
          document.cookie = "session="+uuid;
        }
      });

      // FB.Event.subscribe('messaging_optins', function(e) {
      //     // callback for events triggered by the plugin
      //     console.log(e);
      //   });

  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
