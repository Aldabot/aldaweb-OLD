import './modules';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

// loads the Icon plugin
UIkit.use(Icons);

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
      });

      FB.Event.subscribe('messaging_optins', function(e) {
          // callback for events triggered by the plugin
          console.log(e);
        });

  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
