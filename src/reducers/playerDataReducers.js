import player from "../JSON/Player.json";

const playerDataReducers = (
  state = {
    playerData: player,
    playerDamage: player.playerDamage,
    playerLevel: player.playerLevel,
    playerExp: player.playerExp,
    levelExp: player.levelExp
  },
  action
) => {
  switch (action.type) {
    case "UPDATE_PLAYER_EXP":
      state = {
        ...state,
        playerData: action.payload.playerExp,
        playerData: action.payload.playerLevel
      };
      break;
    case "UPDATE_PLAYER_LEVEL":
      state = {
        ...state,
        playerLevel: action.payload
      };
      break;
  }
  return state;
};

export default playerDataReducers;
