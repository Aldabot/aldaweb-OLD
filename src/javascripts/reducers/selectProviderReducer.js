import Immutable from 'seamless-immutable';
import {
    createReducer,
    createActions
} from 'reduxsauce';


// ACTIONS
const { Types, Creators } = createActions({
    selectProvider: ['provider'],
    setStatus: ['status'],
    setSaltedgeLoginStatus: { saltedgeLoginStatus: 'inProgress' }
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
    return {... state, provider: action.providerStatus};
};
export const setSaltedgeLoginStatus = (state = INITIAL_STATE, action) => {
    return {... state, saltedgeLoginStatus: action.saltedgeLoginStatus};
};

export const reducer = createReducer(INITIAL_STATE, {
    [Types.SELECT_PROVIDER]: selectProvider,
    [Types.SET_STATUS]: setStatus,
    [Types.SET_SALTEDGE_LOGIN_STATUS]: setSaltedgeLoginStatus
});

// const selectProvider = (state = {}, action) => {
//     switch(action.type) {
//     case "SELECT_PROVIDER":
//         return { ...state, provider: action.provider };
//     case "SELECT_PROVIDER_STATUS":
//         return { ...state, status: action.status };
//     case "SET_SALTEDGE_LOGIN_STATUS":
//         console.log("SE Login Status");
//         return { ... state, saltedgeLoginStatus: action.saltedgeLoginStatus };
//     default:
//         return state;
//     }
// };

export default reducer;
