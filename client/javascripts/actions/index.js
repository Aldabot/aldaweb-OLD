export const login = (sessionId) => {
    console.log(sessionId);
    return {
        type: 'LOGIN',
        sessionId
    };
};

export const verifySession = () => {
    return {
        type: 'VERIFY_SESSION'
    };
};

export const logout = () => {
  return {
    type: 'LOGOUT'
  };
};

export const selectProvider = (provider) => {
  return {
    type: 'SELECT_PROVIDER',
    provider
  };
};

export const selectProviderStatus = (status) => {
  return {
    type: 'SELECT_PROVIDER_STATUS',
    status
  };
};
