import enemies from "../JSON/Enemies.json";

const getDataReducers = (
    state = {
      enemyData: enemies,
      currentEnemyData: [],
      displayEnemyComponent: []
    },action
  ) => {
    switch (action.type) {
      case "ENEMY_DATA":
        state = {
          ...state,
          enemyData: action.payload
        };
        break;
      case "CURRENT_ENEMY_DATA":
        state = {
          ...state,
          currentEnemyData: action.payload
        };
        break;
      case "DISPLAY_ENEMY_COMPONENT":
        state = {
          ...state,
          displayEnemyComponent: action.payload
        };
        break;
    }
    return state;
  };
  
  export default getDataReducers;