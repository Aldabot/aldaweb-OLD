const isLoggedIn = (state = false, action) => {
  switch(action.type) {
    case 'LOGIN':
      if (document.cookie.indexOf("session") != -1) {
        return true
      }
      return false
    case 'LOGOUT':
      document.cookie = 'session=;expires=Thu, 01 Jan 1970 00:00:01 GMT;'
      return false
    default:
      return state
  }
}

export default isLoggedIn
