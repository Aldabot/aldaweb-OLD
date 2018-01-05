import React from 'react';
import Header from './header.js';
import DarkHeader from './darkHeader.js';
import Home from './pages/home.js';
import Faq from './pages/faq.js';
import SignUp from './pages/signUp.js';
import AddBank from './pages/addBank.jsx';
import Footer from './footer.js';
import { Switch, Route } from 'react-router-dom'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn : false };
    if (document.cookie.indexOf("session") != -1) {
      this.state.isLoggedIn = true;
    }

    this.logout = this.logout.bind(this);
    this.login = this.login.bind(this);
  }

  logout() {
    console.log("logout");
    // delete cookie and logout
    document.cookie = 'session=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    this.setState({isLoggedIn: false});
  }

  login() {
    this.setState({isLoggedIn: true});
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' render={(props) => (
          <div>
            <Header isLoggedIn={this.state.isLoggedIn} logout={this.logout} />
            <Home />
          </div>
        )} />
        <Route exact path='/faq' render={(props) => (
          <div>
            <DarkHeader isLoggedIn={this.state.isLoggedIn} logout={this.logout} />
            <Faq />
          </div>
        )} />
        <Route exact path='/registrate' render={(props) => (
          <div>
            <DarkHeader isLoggedIn={this.state.isLoggedIn} logout={this.logout} />
            <SignUp isLoggedIn={this.state.isLoggedIn} login={this.login}/>
          </div>
        )} />
      <Route exact path='/addBank' render={(props) => (
          <div>
            <DarkHeader isLoggedIn={this.state.isLoggedIn} logout={this.logout} />
            <AddBank isLoggedIn={this.state.isLoggedIn} login={this.login}/>
          </div>
        )} />
        <Footer />
      </Switch>
    );
  }
}
