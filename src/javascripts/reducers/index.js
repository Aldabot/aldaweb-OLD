import { combineReducers } from 'redux';
import selectProvider from './selectProviderRedux';
import isLoggedIn from './isLoggedIn';
import { routerReducer } from 'react-router-redux';

const aldaApp = combineReducers({
    selectProvider,
    isLoggedIn,
    router: routerReducer
});

export default aldaApp;
