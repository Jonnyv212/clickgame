export const setCombat = data => {
  return dispatch => {
    dispatch({
      type: "SET_COMBAT",
      payload: data
    });
  };
};
