// export const setEnemyData = data => {
//   let rNum = Math.round(Math.random() * (data.length - 1));
//   setCurrentEnemyData(data[rNum]);

//   return dispatch => {
//     dispatch({
//       type: "ENEMY_DATA",
//       payload: data
//     });
//   };
// };

export const setCurrentEnemyData = data => {
  const rNum = Math.round(Math.random() * (data.length - 1));
  const setEnemy = data[rNum]
  return dispatch => {
    dispatch({
      type: "CURRENT_ENEMY_DATA",
      payload: setEnemy
    });
    dispatch(setCurrentEnemyHealth(setEnemy.monsterHealth))
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
