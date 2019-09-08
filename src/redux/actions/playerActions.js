export const setPlayerData = data => {
  return dispatch => {
    dispatch({
      type: "PLAYER_DATA",
      payload: data
    });
  };
};

export const setCurrentPlayerHealth = data => {
  return dispatch => {
    dispatch({
      type: "UPDATE_PLAYER_HEALTH",
      payload: data
    });
  };
};

export const setPlayerLevel = data => {
  return dispatch => {
    dispatch({
      type: "UPDATE_PLAYER_LEVEL",
      payload: data
    });
  };
};

export const setPlayerMaxExp = data => {
  return dispatch => {
    dispatch({
      type: "UPDATE_PLAYER_MAX_EXP",
      payload: data
    });
  };
};
export const setPlayerCurrentExp = data => {
  return dispatch => {
    dispatch({
      type: "UPDATE_PLAYER_CURRENT_EXP",
      payload: data
    });
  };
};
