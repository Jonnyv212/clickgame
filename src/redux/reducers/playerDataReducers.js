import player from "../../JSON/Player.json";

const playerDataReducers = (
  state = {
    playerData: player,
    playerHealth: player.playerHealth,
    playerDamage: player.playerDamage,
    playerLevel: player.playerLevel,
    playerExp: player.playerExp,
    levelExp: player.levelExp
  },
  action
) => {
  switch (action.type) {
    case "PLAYER_DATA":
      state = {
        ...state,
        playerData: action.payload
      };
      break;
    case "UPDATE_PLAYER_HEALTH":
      state = {
        ...state,
        playerData: {
          ...state.playerData,
          playerHealth: action.payload
        }
      };
      break;
    case "UPDATE_PLAYER_LEVEL":
      state = {
        ...state,
        playerLevel: action.payload
      };
      break;
    case "UPDATE_PLAYER_MAX_EXP":
      state = {
        ...state,
        levelExp: action.payload
      };
      break;
    case "UPDATE_PLAYER_CURRENT_EXP":
      state = {
        ...state,
        playerExp: action.payload
      };
      break;
  }
  return state;
};

export default playerDataReducers;
