import { combineReducers } from 'redux'
import selectedProvider from './selectedProviderRedux'
import isLoggedIn from './isLoggedIn'

const aldaApp = combineReducers({
  selectedProvider,
  isLoggedIn
})

export default aldaApp
