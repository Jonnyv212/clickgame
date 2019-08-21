import enemies from "../JSON/Enemies.json";
import player from "../JSON/Player.json"

const getDataReducers = (
    state = {
      enemyData: enemies,
      currentEnemyData: {},
      playerData: player,
      health: 1
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
      case "PLAYER_DATA":
        state = {
          ...state,
          playerData: action.payload
        };
        break;
      case "UPDATE_ENEMY_HEALTH":
        state = {
          ...state,
            health: action.payload
        };
        break;
    }
    return state;
  };
  
  export default getDataReducers;