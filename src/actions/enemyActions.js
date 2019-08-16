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
