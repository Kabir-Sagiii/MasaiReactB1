import { userActionType, userDeleteActionType } from "../ActionTypes/UserType";
export const userAction = (data, dispatch) => {
  dispatch({
    type: userActionType,
    payload: data,
  });
};

export const deleteUserAction = (data, dispatch, index) => {
  data.splice(index, 1);
  var newArray = [...data];

  dispatch({
    type: userDeleteActionType,
    payload: newArray,
  });
};
