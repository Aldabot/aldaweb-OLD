import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from './actions/index'
import { Header, DarkHeader } from './containers/header.js';
import Home from './components/home.js';
import Faq from './components/faq.js';
import SignUp from './containers/signUp.js';
import AddProvider from './containers/addProvider'
import ConnectProvider from './containers/connectProvider'
import Footer from './components/footer.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.props.login()
  }

  render() {
    const { isLoggedIn } = this.props
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
              <AddProvider />
            </div>
          )} />
          <Route exact path='/connect_provider' render={(props) => (
            <div>
              <DarkHeader />
              <ConnectProvider />
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
    isLoggedIn: state.isLoggedIn,
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
