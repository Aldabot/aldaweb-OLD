import { combineReducers } from 'redux'
import selectProvider from './selectProviderRedux'
import isLoggedIn from './isLoggedIn'

const aldaApp = combineReducers({
  selectProvider,
  isLoggedIn
})

export default aldaApp
