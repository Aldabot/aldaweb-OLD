import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginButton from '../components/loginButton.jsx';
import { logout } from '../actions/index';
import UIkit from 'uikit';

export class HeaderComponent extends React.Component {
    hideOffcanvas() {
        UIkit.offcanvas('#offcanvas-nav').hide();
        /* UIkit.offcanvas('#offcanvas-nav').$destroy(true);*/
    }

    render() {
        const offcanvasNav = (
            <div id="offcanvas-nav" uk-offcanvas="overlay: true">
                <div className="uk-offcanvas-bar">
                    <ul className="uk-nav uk-nav-default">
                        <li className="uk-nav-header">Alda</li>
                        <li onClick={this.hideOffcanvas}>
                            <Link to="/">
                                <span className="uk-margin-small-right" uk-icon="icon: home"></span>Inicio
                            </Link>
                        </li>
                        <li onClick={this.hideOffcanvas}>
                            <Link to="/faq">
                                <span className="uk-margin-small-right" uk-icon="icon: question"></span>Preguntas Frecuentes
                            </Link>
                        </li>
                        {this.props.isLoggedIn && (
                             <li onClick={this.hideOffcanvas}>
                                 <Link to="/add_provider">
                                     <span className="uk-margin-small-right" uk-icon="icon: unlock"></span>Añadir Banco
                                 </Link>
                             </li>
                        )}
                        <li className="uk-nav-divider"></li>
                        <li><a href="/privacidad.html"><span className="uk-margin-small-right" uk-icon="icon: info"></span> Privacidad</a></li>
                        <li onClick={this.hideOffcanvas} className="uk-margin uk-text-center"><LoginButton  isLoggedIn={this.props.isLoggedIn} logout={this.props.logout}/></li>
                    </ul>
                </div>
            </div>
        );

        const { isLoggedIn } = this.props;


        return (
            <div>
                <nav className="uk-navbar-container uk-visible@s" uk-navbar="true">
                    <div className="uk-navbar-left uk-margin-left">
                        <a href="http://aldabot.es" className="uk-navbar-item uk-logo uk-light">Alda</a>
                    </div>

                    <div className="uk-navbar-right uk-margin-right">
                        <ul className="uk-navbar-nav" uk-scrollspy="target: > li; cls:uk-animation-slide-top-small; delay: 200">
                            <li ><Link to='/'>Inicio</Link></li>
                            <li><Link to="/faq">Preguntas Frecuentes</Link></li>
                            {(isLoggedIn) ? <li><Link to="/add_provider">Añadir Banco</Link></li> : ""}
                            <li><LoginButton isLoggedIn={this.props.isLoggedIn} logout={this.props.logout}/></li>
                        </ul>
                    </div>
                </nav>

                <nav className="uk-navbar-container uk-hidden@s"  uk-navbar="true">
                    <div className="uk-navbar-right uk-margin-right uk-margin-top">
                        <ul className="uk-navbar-nav" uk-scrollspy="target: > li; cls:uk-animation-slide-top-small; delay: 200">
                            <li>
                                <button className="uk-button uk-button-default" type="button" uk-toggle="target: #offcanvas-nav">
                                    <span uk-icon="icon: menu"></span>
                                </button>
                            </li>
                        </ul>
                    </div>

                    {offcanvasNav}
                </nav>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.login.isLoggedIn
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        logout: () => {
            dispatch(logout())
        }
    }
}
export const Header = connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderComponent)


export class DarkHeaderComponent extends React.Component {
    hideOffcanvas() {
        UIkit.offcanvas('#offcanvas-nav-dark').hide();
    }

    render() {
        const offcanvasNav = (
            <div id="offcanvas-nav-dark" uk-offcanvas="overlay: true">
                <div className="uk-offcanvas-bar">
                    <ul className="uk-nav uk-nav-default">
                        <li className="uk-nav-header">Alda</li>
                        <li onClick={this.hideOffcanvas}>
                            <Link to="/">
                                <span className="uk-margin-small-right" uk-icon="icon: home"></span>Inicio
                            </Link>
                        </li>
                        <li onClick={this.hideOffcanvas}>
                            <Link to="/faq">
                                <span className="uk-margin-small-right" uk-icon="icon: question"></span>Preguntas Frecuentes
                            </Link>
                        </li>
                        {this.props.isLoggedIn && (
                             <li onClick={this.hideOffcanvas}>
                                 <Link to="/add_provider">
                                     <span className="uk-margin-small-right" uk-icon="icon: unlock"></span>Añadir Banco
                                 </Link>
                             </li>
                        )}
                        <li className="uk-nav-divider"></li>
                        <li><a href="/privacidad.html"><span className="uk-margin-small-right" uk-icon="icon: info"></span> Privacidad</a></li>
                        <li onClick={this.hideOffcanvas} className="uk-margin uk-text-center"><LoginButton  isLoggedIn={this.props.isLoggedIn} logout={this.props.logout}/></li>
                    </ul>
                </div>
            </div>
        );

        const { isLoggedIn } = this.props

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
                    {(isLoggedIn) ? <li><Link to="/add_provider">Añadir Banco</Link></li> : ""}
                    <li><LoginButton isLoggedIn={this.props.isLoggedIn} logout={this.props.logout}/></li>
                </ul>
            </div>
          </nav>


          <nav className="uk-navbar-container uk-hidden@s background-primary uk-light" uk-navbar="true">
              <div className="uk-navbar-right uk-margin-right uk-margin-top">
                <ul className="uk-navbar-nav" uk-scrollspy="target: > li; cls:uk-animation-slide-top-small; delay: 200">
                    <li>
                      <button className="uk-button uk-button-default" type="button" uk-toggle="target: #offcanvas-nav-dark">
                        <span uk-icon="icon: menu"></span>
                      </button>
                    </li>
                </ul>
              </div>

              {offcanvasNav}
          </nav>
        </div>
      );
    }
}
export const DarkHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(DarkHeaderComponent)
