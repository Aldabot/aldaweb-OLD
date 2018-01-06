const selectedProvider = (state = {}, action) => {
  switch(action.type) {
    case "SELECT_PROVIDER":
      state = action.provider
    default:
      return state
  }
}

export default selectedProvider
