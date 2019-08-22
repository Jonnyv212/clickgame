export const setPlayerData = data => {
    return dispatch => {
      dispatch({
        type: "PLAYER_DATA",
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