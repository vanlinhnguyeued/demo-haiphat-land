import { handleActions } from "redux-actions";
import { loginservice } from "../../services/Auth";
import { LOADING, setLoading, IS_LOGIN, setIsLogin } from "./action-type";
import { setUser } from "../../Component/action-type";
import jwt_decode from "jwt-decode";
const initialState = {
  isLoading: false,
  isLogin: false,
};

export const authenticate = (data) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const loginData = await loginservice(data);
    if (loginData.status === 200) {
      dispatch(setIsLogin(true));
      localStorage.setItem("token", loginData.data);
      let user = jwt_decode(loginData.data);
      dispatch(setUser({ user: user, isLogged: true }));
    } else {
    }
  } catch (error) {}
  dispatch(setLoading(false));
};

const actions = {
  [LOADING]: (state, action) => ({
    ...state,
    isLoading: action.payload,
  }),
  [IS_LOGIN]: (state, actions) => ({
    ...state,
    isLogin: actions.payload,
  }),
};

export default handleActions(actions, initialState);
