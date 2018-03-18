import { combineReducers } from 'redux';
import selectProvider from './selectProviderReducer.js';
import { routerReducer } from 'react-router-redux';
import login from './loginReducer.js';

const aldaApp = combineReducers({
    selectProvider,
    login,
    router: routerReducer
});

export default aldaApp;
