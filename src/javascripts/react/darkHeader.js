import React from 'react';
import { Link } from 'react-router-dom';
import LoginButton from './loginButton.jsx';

export default class DarkHeader extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
      return (
        <div>
          <nav className="uk-navbar-container uk-visible@s background-primary uk-light" uk-navbar="true">
            <div className="uk-navbar-left uk-margin-left">
                 <a href="http://aldabot.es" className="uk-navbar-item uk-logo uk-light">Alda</a>
            </div>

            <div className="uk-navbar-right uk-margin-right">
                <ul className="uk-navbar-nav" uk-scrollspy="target: > li; cls:uk-animation-slide-top-small; delay: 200">
                    <li><Link to='/'>Inicio</Link></li>
                    <li><Link to="/faq">Preguntas Frecuentes</Link></li>
                    <li><LoginButton isLoggedIn={this.props.isLoggedIn} logout={this.props.logout}/></li>
                </ul>
            </div>
          </nav>


          <nav className="uk-navbar-container uk-hidden@s {% block mobileBackground %}{% endblock %}" uk-navbar="true">
              <div className="uk-navbar-right uk-margin-right uk-margin-top">
                <ul className="uk-navbar-nav" uk-scrollspy="target: > li; cls:uk-animation-slide-top-small; delay: 200">
                    <li>
                      <button className="uk-button uk-button-default" type="button" uk-toggle="target: #offcanvas-nav">
                        <span uk-icon="icon: menu"></span>
                      </button>
                    </li>
                </ul>
              </div>


            <div id="offcanvas-nav" uk-offcanvas="overlay: true">
                <div className="uk-offcanvas-bar">
                    <ul className="uk-nav uk-nav-default">
                        <li className="uk-nav-header">Alda</li>
                        <li><a href="/"><span className="uk-margin-small-right" uk-icon="icon: home"></span>Inicio</a></li>
                        <li><a href="/faqs.html"><span className="uk-margin-small-right" uk-icon="icon: question"></span>Preguntas Frecuentes</a></li>
                        <li className="uk-nav-divider"></li>
                        <li><a href="/privacidad.html"><span className="uk-margin-small-right" uk-icon="icon: info"></span> Privacidad</a></li>
                    </ul>
                </div>
            </div>
          </nav>
        </div>
      );
    }
}
