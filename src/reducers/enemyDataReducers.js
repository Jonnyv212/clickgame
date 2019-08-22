import enemies from "../JSON/Enemies.json";

const enemyDataReducers = (
  state = {
    enemyData: enemies,
    currentEnemyData: {},
    health: 1,
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
    case "CURRENT_ENEMY_DATA":
      state = {
        ...state,
        currentEnemyData: action.payload,
        health: action.payload.monsterHealth
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

export default enemyDataReducers;
