const selectProvider = (state = {}, action) => {
  switch(action.type) {
    case "SELECT_PROVIDER":
      return { ...state, provider: action.provider }
    case "SELECT_PROVIDER_STATUS":
      return { ...state, status: action.status }
    default:
      return state
  }
}

export default selectProvider
