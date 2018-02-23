const INITIAL_STATE = {
  loaded: false
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'SET_LOAD':
      return {
        ...state,
        loaded: true
      };
    default:
      return state;
  }
}
