import React from 'react';
import { Switch, Route } from 'react-router';
import { connect } from 'react-redux';
import { login } from './actions/index';
import { Header, DarkHeader } from './containers/header.jsx';
import Home from './components/home.js';
import Faq from './components/faq.js';
import SignUp from './containers/signUp.jsx';
import AddProvider from './containers/addProvider';
import ConnectProvider from './containers/connectProvider.jsx';
import Footer from './components/footer.js';
import requireAuth from './containers/requireAuth.jsx';
import { getCookieValue } from './lib/helpers.js';
import Privacy from './components/privacy.jsx';


class App extends React.Component {
    constructor(props) {
        super(props);

        // LOGIN if cookie exists
        const sessionId = getCookieValue("session");
        if (sessionId != "") {
            this.props.login(sessionId);
        }
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
                            return <div>
                                <DarkHeader />
                                <SignUp {...props} isLoggedIn={this.props.login.isLoggedIn} />
                            </div>
                    }} />
                    <Route exact path='/add_provider' render={(props) => (
                        <div>
                            <DarkHeader />
                            {React.createElement(requireAuth(AddProvider))}
                        </div>
                    )} />
                    <Route exact path='/connect_provider' render={(props) => (
                        <div>
                            <DarkHeader />
                            <ConnectProvider {...props} />
                        </div>
                    )} />
                    <Route exact path='/privacidad' render={(props) => (
                        <div>
                            <DarkHeader />
                            <Privacy />
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
        login: (sessionId) => { dispatch(login(sessionId)); }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
/* <Route exact path='/add_provider' component={requireAuth(
 *         <div>
 *             <DarkHeader />
 *             <AddProvider />
 *         </div>
 * )} />*/
