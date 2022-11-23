import { userActionType } from "../ActionTypes/UserType";
export const userAction = (data, dispatch) => {
  dispatch({
    type: userActionType,
    payload: data,
  });
};
