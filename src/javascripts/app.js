import './modules';
import 'uikit/dist/js/uikit.min.js';
import 'uikit/dist/js/uikit-icons.min.js';

var $ = require('jquery');

// get Facebook ID
var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

  for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
          return sParameterName[1] === undefined ? true : sParameterName[1];
      }
  }
};

var sender_id = getUrlParameter('id');

// Kontomatik WIDGET
embedKontomatik({
  client: 'alda-test',  // replace it with your assigned client id
  divId: 'kontomatik',       // must match the div element id
  country: 'es',
  locale: 'es',
  // styles: {
  //   bodyBgColor: '#d02090',
  // },
  onSuccess: function(target, sessionId, sessionIdSignature, options) {
    // End-user successfully signed in to the bank
    // Pass target, sessionId and sessionIdSignature to your backend
    // document.getElementById('kontomatik').innerHTML =
    // "sessionId=" + sessionId + "&sessionIdSignature=" + sessionIdSignature;

    startCountdown();

    $.getJSON( "https://ke30cp6bpd.execute-api.eu-west-1.amazonaws.com/production/kontomatik?sender_id="+sender_id+"&sessionId="+sessionId+"&sessionIdSignature="+sessionIdSignature, function( data ) {
      var items = [];
      $.each( data, function( key, val ) {
        items.push( "<li id='" + key + "'>" + val + "</li>" );
      });

      $( "<ul/>", {
        "class": "my-new-list",
        html: items.join( "" )
      }).appendTo( "body" );
    });
  }
});

$.fn.extend({
    animateCss: function (animationName, callback) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
            if (callback) {
              callback();
            }
        });
        return this;
    }
});

function startCountdown() {
  var countdown = 15;
  var interval = setInterval(() => {
    $('#kontomatik').animateCss('zoomIn');
    $("#kontomatik").html(countdown);
    if (countdown > 0) {
      countdown -= 1;
    } else {
      clearInterval(interval);
      $("#kontomatik").html("Conectado! <br /><br /> Nos vemos en Facebook!")
      $("#kontomatik").addClass("kontomatikSuccess");
    }

  }, 1000);
}

setTimeout(function() {
  var msg = $("#Kontomatik").contents().find("#ReactApp");
  console.log(msg);
}, 10000);

console.log(`app.js has loaded!`)
