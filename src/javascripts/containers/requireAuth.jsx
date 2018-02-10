import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { verifySession } from '../actions/index.js';

// following: https://stackoverflow.com/questions/31084779/how-to-restrict-access-to-routes-in-react-router
export default function requireAuth(Component) {
    class AuthenticatedComponent extends React.Component {
        componentWillMount() {
            this.checkAuth();
        }

        checkAuth() {

            const { isLoggedIn, sessionId } = this.props;
            console.log("start verify");
            this.props.verifySession(sessionId);

            if ( !isLoggedIn ) {
                console.log("change rout");
                /* this.props.history.push(`/registrate`);*/
            }
        }

        render() {
            return this.props.isLoggedIn
                 ? <Component { ...this.props } />
                 : null;
        }
    }

    const mapStateToProps = (state, ownProps) => {
        return {
            isLoggedIn: state.login.isLoggedIn,
            sessionId: state.login.sessionId
        };
    }
    const mapDispatchToProps = (dispatch, ownProps) => {
        return {
            verifySession: (sessionId) => { dispatch(verifySession(status)); },
        };
    }

    /* return connect(mapStateToProps, mapDispatchToProps)(AuthenticatedComponent);*/
    return withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthenticatedComponent));
};
