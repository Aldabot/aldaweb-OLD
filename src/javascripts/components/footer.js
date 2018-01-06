import React from 'react';

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
                  <li><a href="/faqs.html" uk-scroll="true">Preguntas Frecuentes</a></li>
                  <li><a href="/privacidad.html">Privacidad</a></li>
              </ul>
            </div>
          </nav>
        </div>
      );
    }
}
