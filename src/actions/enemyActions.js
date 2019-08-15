export const setEnemyData = data => {
  return dispatch => {
    dispatch({
      type: "ENEMY_DATA",
      payload: data
    });
  };
};
