export const setEnemyData = data => {
  return dispatch => {
    dispatch({
      type: "ENEMY_DATA",
      payload: data
    });
  };
};

export const setCurrentEnemyData = data => {
  return dispatch => {
    dispatch({
      type: "CURRENT_ENEMY_DATA",
      payload: data
    });
  };
};

export const setCurrentEnemyHealth = data => {
  return dispatch => {
    dispatch({
      type: "UPDATE_ENEMY_HEALTH",
      payload: data
    });
  };
};
