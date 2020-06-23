import { handleActions } from "redux-actions";
import { getListProjectService } from "../../services/Auth";
import {
  LOGOUT,
  setLogout,
  setProject,
  GET_PROJECTS,
  cleanUp,
  CLEAN_UP,
  LOADING_PROJECT,
  setLoadingProject,
} from "./action-type";
import { setUser } from "../../Component/action-type";
const initialState = {
  isLogout: false,
  listProjects: [],
  isLoadingProject: false,
};

export const logout = () => (dispatch) => {
  dispatch(setLogout(true));
  localStorage.removeItem("token");
  dispatch(setUser({ user: {}, isLogged: false }));
};
export const getListProjects = () => async (dispatch) => {
  dispatch(setLoadingProject(true));
  try {
    const res = await getListProjectService();
    console.log("a");
    if (res.status === 200) {
      dispatch(setProject(res.data));
      dispatch(setLoadingProject(false));
    } else {
    }
  } catch (error) {}
};
export const cleanUpData = () => async (dispatch) => {
  dispatch(cleanUp);
};
const actions = {
  [LOGOUT]: (state, action) => ({
    ...state,
    isLogout: action.payload,
  }),
  [GET_PROJECTS]: (state, action) => ({
    ...state,
    listProjects: action.payload,
  }),
  [LOADING_PROJECT]: (state, action) => ({
    ...state,
    isLoadingProject: action.payload,
  }),
  [CLEAN_UP]: (state, action) => ({
    isLogout: false,
    listProjects: [],
  }),
};

export default handleActions(actions, initialState);
