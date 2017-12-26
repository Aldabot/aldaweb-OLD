import React from 'react';
import { Link } from 'react-router-dom'

export default class LoginButton extends React.Component {
  render() {
    console.log(this.props);
    return (
      this.props.isLoggedIn ?
        <Link to="/" onClick={this.props.logout} ><button className="uk-button uk-button-default">Logout</button></Link>
        :
        <Link to="/registrate"><button className="uk-button uk-button-default">Regístrate</button></Link>
    );
  }
}
