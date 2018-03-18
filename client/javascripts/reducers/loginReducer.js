const login = (state = {isLoggedIn: false, sessionId: null},  action) => {
    switch(action.type) {
    case 'LOGIN':
        return {isLoggedIn: true, sessionId: action.sessionId};
    case 'LOGOUT':
        document.cookie = 'session=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        return {isLoggedIn: false, sessionId: null};
    default:
        return state;
    }
};

export default login;
