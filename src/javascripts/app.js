import React from 'react';
import { Header, DarkHeader } from './containers/header.js';
import Home from './components/home.js';
import Faq from './components/faq.js';
import SignUp from './containers/signUp.js';
import AddProvider from './components/addProvider.jsx';
import Footer from './components/footer.js';
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from './actions/index'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.props.login()
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' render={(props) => (
            <div>
              <Header/>
              <Home />
            </div>
          )} />
          <Route exact path='/faq' render={(props) => (
            <div>
              <DarkHeader />
              <Faq />
            </div>
          )} />
          <Route exact path='/registrate' render={(props) => (
            <div>
              <DarkHeader />
              <SignUp isLoggedIn={this.props.isLoggedIn} />
            </div>
          )} />
          <Route exact path='/add_provider' render={(props) => (
            <div>
              <DarkHeader />
              <AddProvider isLoggedIn={this.props.isLoggedIn} />
            </div>
          )} />
          <Footer />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.isLoggedIn
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: () => {
      dispatch(login())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
