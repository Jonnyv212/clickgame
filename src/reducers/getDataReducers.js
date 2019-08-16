import enemies from "../JSON/Enemies.json";

const getDataReducers = (
    state = {
      enemyData: enemies,
      currentEnemyData: []
    },action
  ) => {
    switch (action.type) {
      case "ENEMY_DATA":
        state = {
          ...state,
          displayComp: action.payload
        };
        break;
      case "CURRENT_ENEMY_DATA":
        state = {
          ...state,
          displayComp: action.payload
        };
        break;
    }
    return state;
  };
  
  export default getDataReducers;