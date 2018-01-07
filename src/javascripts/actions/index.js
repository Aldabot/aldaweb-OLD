export const login = () => {
  return {
    type: 'LOGIN'
  }
}

export const logout = () => {
  return {
    type: 'LOGOUT'
  }
}

export const selectProvider = (provider) => {
  return {
    type: 'SELECT_PROVIDER',
    provider
  }
}

export const selectProviderStatus = (status) => {
  return {
    type: 'SELECT_PROVIDER_STATUS',
    status
  }
}
