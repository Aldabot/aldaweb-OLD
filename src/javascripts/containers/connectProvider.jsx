import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { DoubleDounceLoading } from 'styled-spinkit';
import { selectProviderStatus } from '../actions/index.js';
import axios from 'axios';
import { create } from 'apisauce';
import { withRouter } from 'react-router';
import { setSaltedgeLoginStatus, actions as selectProviderActions }  from '../reducers/selectProviderReducer.js';


var instance = axios.create({
    baseURL: 'https://ke30cp6bpd.execute-api.eu-west-1.amazonaws.com/production/saltedge/logins',
    timeout: 5000,
    headers: {}
});
const backendAPI = create({
    baseURL: 'https://9u7wwafaq0.execute-api.eu-west-1.amazonaws.com/dev',
    timeout: 5000
});

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
};

class ConnectProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.tryAgain = this.tryAgain.bind(this);
    }

    componentWillMount() {
        const obj = this.props.provider;
        if(Object.keys(obj).length === 0 && obj.constructor === Object) {
            this.props.history.push('/add_provider');
        }
    }

    handleSubmit() {
        this.props.setProviderStatus('Creating Login');

        const sessionId = getCookie('session');
        const params = {
            providerCode:  this.props.provider.code,
            username: this.state.username,
            password: this.state.password,
            sessionId
        };

        instance.post('/', params).then((results) => {
            setTimeout(() => {this.props.setProviderStatus('Updating Accounts');}, 1500);
            setTimeout(() => {this.props.setProviderStatus('Updating Transactions');}, 3000);
            setTimeout(() => {this.props.setProviderStatus('success');}, 5000);

            /* var getLoginStatusInterval = setInterval(() => {
             *     backendAPI.post('/loginStatus', {loginId}).then((response) => {
             *         console.log(JSON.stringify(response, null, 4));
             *         if (response.status == "succeeded") {
             *             this.props.setProviderStatus("success");
             *         } else if (response.status == "failed") {
             *             this.props.setProviderStatus("failed");
             *         }
             *     };
             * });*/

            /* setTimeout(() => {this.props.setProviderStatus('success');}, 4000);*/
            this.setState({ username: '', password: ''});
        }).catch((error) => {
            if(error.response) {
                switch(error.response.data) {
                    case "LoginDuplicated":
                        this.props.setProviderStatus('Duplicated Login');
                        break;
                    default:
                        this.props.setProviderStatus('error');
                }
            } else {
                this.props.setProviderStatus('error');
                console.log("lol");
                console.log(error);
            }
        });


        // setTimeout(() => {this.props.setProviderStatus('success');}, 4000);
    }

    handleChange(event) {
        const target = event.target;
        if(target.name == 'password') {
            this.setState({ password: target.value });
        } else if(target.name == 'username') {
            this.setState({ username: target.value });
        }
    }

    tryAgain() {
        this.props.setProviderStatus('form');
    }

    render() {
        const { provider, providerStatus } = this.props;

        const loadingAnimation = (
            <div className="uk-text-center">
                <DoubleDounceLoading size={100} color='#0072ff' />
                <p>{providerStatus}</p>
            </div>
        );


        const tryAgainButton = (
            <button className="uk-button uk-button-default" onClick={this.tryAgain}>
                Inténtalo de nuevo
            </button>
        );

        const addAnotherBankButton = (
            <button className="uk-button uk-button-default" onClick={this.tryAgain}>
                <Link to="/add_provider">
                    Añadir mas Bancos
                </Link>
            </button>
        );


        return (
            <section uk-height-viewport="true" className="uk-section uk-padding-remove-top uk-margin-remove-top">
                <h1 className="uk-heading-primary uk-text-center uk-light background-primary padding-bottom">Conectar</h1>

                <div className="uk-container">

                    <div className="uk-text-center uk-padding">
                        <div uk-icon="icon: lock; ratio: 3"></div>
                        <p className="uk-text-lead">Alda securely connects to your account in read-only mode, using bank-level 256-bit encryption.</p>
                    </div>

                    {(() => {
                         switch(providerStatus) {
                             case "form":
                                 return <form onSubmit={this.handleSubmit} className="uk-text-center">
                                     <div className="uk-card rounded-border-bottom uk-align-center uk-card-default uk-width-1-2@m provider-form">
                                         <div className="uk-card-header rounded-border-top" style={{backgroundColor: provider.color}}>
                                             <img className="uk-align-center" src={provider.img}/>
                                         </div>
                                         <div className="uk-card-body">
                                             <fieldset className="uk-fieldset">
                                                 <div className="uk-margin">
                                                     <input name="username" className="uk-input uk-form-large uk-width-1-1" type="text" placeholder="Customer Identifier" value={this.state.username} onChange={this.handleChange} />
                                                 </div>
                                                 <div className="uk-margin">
                                                     <div className="uk-margin uk-position-relative">
                                                         <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                                                         <input name="password" className="uk-input uk-form-large" type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                                                     </div>
                                                 </div>
                                             </fieldset>
                                         </div>
                                         <div className="uk-card-footer uk-flex uk-flex-middle">
                                             <Link to="/add_provider" className="uk-button uk-button-text uk-margin-right">Cancel</Link>
                                             <input className="uk-input uk-form-large uk-form-width-large uk-margin-left" type="submit" value="Submit" />
                                         </div>
                                     </div>
                                 </form>
                                 case 'success':
                                 return (
                                 <div className="uk-text-center">
                                     <div uk-icon="icon: check; ratio: 5" style={{color: "green"}}></div>
                                     <p style={{color: "green"}}>Connectado</p>
                                     {addAnotherBankButton}
                                 </div>
                                 )
                             case "Duplicated Login":
                             case 'error':
                                 return (
                                     <div className="uk-text-center">
                                         <div uk-icon="icon: close; ratio: 5" style={{color: "red"}}></div>
                                         <p style={{color: "red"}}>{this.props.providerStatus}</p>
                                         {tryAgainButton}
                                     </div>
                                 )
                             default:
                                 return loadingAnimation
                         }
                    })()}
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.isLoggedIn,
        provider: state.selectProvider.provider,
        providerStatus: state.selectProvider.status,
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    dispatch({type: "GET_SALTEDGE_LOGIN_STATUS", loginId: 961779});
    return {
        setProviderStatus: (status) => { dispatch(selectProviderActions.selectProviderStatus(status)); },
        setSaltedgeLoginStatus: (status) => { dispatch(selectProviderActions.setSaltedgeLoginStatus(status)); }
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ConnectProvider);
