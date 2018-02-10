import { take, put, takeLatest } from 'redux-saga/effects';
import { isValidSessionId } from '../lib/backend.js';

function* verifySession(action) {
    try {
        const isValid = yield take(isValidSessionId, action.sessionId);
        yield put({type: "LOGIN", sessionId});
    } catch (e) {
        yield put({type: "LOGOUT"});
    }
};

export function* verifySessionSaga() {
    console.log("verifySessionSaga");
    yield takeLatest("VERIFY_SESSION", verifySession);
}
