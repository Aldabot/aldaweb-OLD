import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from './actions/index';
import { Header, DarkHeader } from './containers/header.jsx';
import Home from './components/home.js';
import Faq from './components/faq.js';
import SignUp from './containers/signUp.jsx';
import AddProvider from './containers/addProvider';
import ConnectProvider from './containers/connectProvider.jsx';
import Footer from './components/footer.js';


class App extends React.Component {
  constructor(props) {
    super(props);
      this.props.login();
  }

  render() {
      const { isLoggedIn } = this.props;
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
        <Route exact path='/registrate' render={(props) => {
            console.log(props);
            return <div>
              <DarkHeader />
              <SignUp {...props} isLoggedIn={this.props.isLoggedIn} />
            </div>
          }} />
          <Route exact path='/add_provider' render={(props) => (
            <div>
              <DarkHeader />
              <AddProvider />
            </div>
          )} />
          <Route exact path='/connect_provider' render={(props) => (
            <div>
              <DarkHeader />
              <ConnectProvider {...props} />
            </div>
          )} />
        </Switch>
        <Footer />
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
