import { combineReducers } from 'redux';
import selectProvider from './selectProviderRedux';
import { routerReducer } from 'react-router-redux';
import login from './loginReducer.js';

const aldaApp = combineReducers({
    selectProvider,
    login,
    router: routerReducer
});

export default aldaApp;
