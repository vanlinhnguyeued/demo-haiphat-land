import { handleActions } from "redux-actions";
import { USER_INFOR, setUser } from "./action-type";
import jwt_decode from "jwt-decode";

const initialState = {
  isAuthen: false,
  userInfo: {},
};

export const setConfig = (token, isLogged) => (dispatch) => {
  try {
    let user = jwt_decode(token);
    dispatch(setUser({ user: user, isLogged: isLogged }));
  } catch (error) {}
};

const actions = {
  [USER_INFOR]: (state, action) => ({
    ...state,
    isAuthen: action.payload.isLogged,
    userInfo: action.payload.user,
  }),
};

export default handleActions(actions, initialState);
