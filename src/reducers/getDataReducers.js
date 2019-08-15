const getDataReducers = (
    state = {
      gData: []
    },action
  ) => {
    switch (action.type) {
      case "ENEMY_DATA":
        state = {
          ...state,
          displayComp: action.payload
        };
        break;
    }
    return state;
  };
  
  export default getDataReducers;