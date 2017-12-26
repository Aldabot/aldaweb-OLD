import React from 'react';
const uuidv4 = require('uuid/v4');

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uuid: uuidv4()
    }
  }

  componentDidMount() {
    // fix disappearing Send Messenger Button
    if( typeof FB !== 'undefined' ) {
      FB.XFBML.parse();
    }
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
            document.cookie = "session="+this.state.uuid;
            this.props.login();
          }
        }.bind(this));
    }.bind(this);


    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
  }

  render() {
    return (
      <section uk-height-viewport="true" className="uk-section uk-padding-remove-top uk-margin-remove-top">
        <h1 className="uk-heading-primary uk-text-center uk-light background-primary padding-bottom">Regístrate</h1>

        <div className="fb-send-to-messenger"
          messenger_app_id="1743051222670922"
          page_id="109017126525560"
          data-ref={this.state.uuid}
          color="blue"
          size="xlarge">
        </div>

        <div>
          {(this.props.isLoggedIn) ? "Logged IN" : "Logged OUT" }
        </div>
      </section>
    );
  }
}
