const defaultState = []

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'GET_COUNTIES': {
      return action.payload
    }

    default: return state;
  }
}