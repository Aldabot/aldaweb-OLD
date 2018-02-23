import React from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends React.Component {
    render() {
      return (
        <div>
          <hr className="uk-visible@s" />
          <nav className="uk-border-top uk-navbar-container uk-margin uk-visible@s" uk-navbar="true">
            <div className="uk-navbar-left uk-margin-left">
                 <a href="http://aldabot.es" className="uk-navbar-item uk-logo">Alda</a>
            </div>

            <div className="uk-navbar-center">
              <ul className="uk-navbar-nav">
                  <li><Link to="/faq">Preguntas Frecuentes</Link></li>
                  <li><Link to="/privacidad">Privacidad</Link></li>
              </ul>
            </div>
          </nav>
        </div>
      );
    }
}
