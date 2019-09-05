import enemies from "../JSON/Enemies.json";

const enemyDataReducers = (
  state = {
    enemyData: enemies,
    currentEnemyData: {},
    combatEnabled: false
  },
  action
) => {
  switch (action.type) {
    case "ENEMY_DATA":
      state = {
        ...state,
        enemyData: action.payload
      };
      break;
    case "SET_COMBAT":
      state = {
        ...state,
        combatEnabled: action.payload
      };
      break;
    case "CURRENT_ENEMY_DATA":
      state = {
        ...state,
        currentEnemyData: action.payload
      };
      break;
    case "UPDATE_ENEMY_HEALTH":
      state = {
        ...state,
        currentEnemyData: {
          ...state.currentEnemyData,
          monsterHealth: action.payload
        }
      };
      break;
  }
  return state;
};

export default enemyDataReducers;
