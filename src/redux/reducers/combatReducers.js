const combatReducers = (
  state = {
    combat: false
  },
  action
) => {
  switch (action.type) {
    case "SET_COMBAT":
      state = {
        ...state,
        combat: action.payload
      };
      break;
  }
  return state;
};

export default combatReducers;
