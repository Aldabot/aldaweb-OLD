import { combineReducers } from 'redux'
import providers from './providers'
import isLoggedIn from './isLoggedIn'

const aldaApp = combineReducers({
  providers,
  isLoggedIn
})

export default aldaApp
