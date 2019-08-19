export const setPlayerData = data => {
    return dispatch => {
      dispatch({
        type: "PLAYER_DATA",
        payload: data
      });
    };
  };