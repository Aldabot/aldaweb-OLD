import { call, take, put, takeLatest } from 'redux-saga/effects';
import { isValidSessionId, getSaltedgeLoginStatusCall } from '../lib/backend.js';

function* verifySession(action) {
    try {
        const isValid = yield take(isValidSessionId, action.sessionId);

        // missing sessionID
        if (isValid) {
            yield put({type: "LOGIN", sessionId});
        } else {
            yield put({type: "LOGOUT"});
        }
    } catch (e) {
        yield put({type: "LOGOUT"});
    }
};

export function* verifySessionSaga() {
    console.log("verifySessionSaga");
    yield takeLatest("VERIFY_SESSION", verifySession);
}


////////////////////////////////////////////////////////////////////////////////
// Saltedge Login Status
////////////////////////////////////////////////////////////////////////////////

function* getSaltedgeLoginStatus(action) {
    console.log("saga generator called");
    console.log(action);
    try {
        const saltedgeLoginStatus = yield call(getSaltedgeLoginStatusCall, action.loginId);
        yield put({type: "SET_SALTEDGE_LOGIN_STATUS", saltedgeLoginStatus});
    } catch (e) {
        console.log(JSON.stringify(e, null, 4));
        yield put({type: "SET_SALTEDGE_LOGIN_STATUS", saltedgeLoginStatus: 'error'});
    }
};

export function* getSaltedgeLoginStatusSaga() {
    console.log("getSaltedeLoginStatus SAGA");
    yield takeLatest("GET_SALTEDGE_LOGIN_STATUS", getSaltedgeLoginStatus);
}
