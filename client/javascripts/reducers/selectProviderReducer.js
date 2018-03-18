import Immutable from 'seamless-immutable';
import {
    createReducer,
    createActions
} from 'reduxsauce';


// ACTIONS
const { Types, Creators } = createActions({
    selectProvider: ['provider'],
    setStatus: ['status'],
    setSaltedgeLoginStatus: ['saltedgeLoginStatus']
}, {});

// INITIAL STATE
export const INITIAL_STATE = Immutable({
    provider: {},
    status: 'form',
    saltedgeLoginStatus: "inProgress"
});

// REDUCERS
export const selectProvider = (state = INITIAL_STATE, action) => {
    return {... state, provider: action.provider};
};
export const setStatus = (state = INITIAL_STATE, action) => {
    return {... state, status: action.status};
};
export const setSaltedgeLoginStatus = (state = INITIAL_STATE, action) => {
    console.log(JSON.stringify(action, null, 4));
    return {... state, saltedgeLoginStatus: action.saltedgeLoginStatus};
};

export const reducer = createReducer(INITIAL_STATE, {
    [Types.SELECT_PROVIDER]: selectProvider,
    [Types.SET_STATUS]: setStatus,
    [Types.SET_SALTEDGE_LOGIN_STATUS]: setSaltedgeLoginStatus
});

export default reducer;
export const actions = Creators;

