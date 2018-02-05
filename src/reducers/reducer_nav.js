const INITIAL_STATE = {
  isExpanded: false
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'TOGGLE_NAV':
      // is payload has onlyClosed flagged true, change isExpanded to false. Otherwise, change it to the opposite of the current state.
      const navState = action.payload.onlyClose ? false : !state.isExpanded;
      return {
        ...state,
        isExpanded: navState
      };
  }

  return state;
}
