import { createAction } from "redux-actions";
export const LOGOUT = "Authen/LOGOUT";
export const setLogout = createAction(LOGOUT);

export const GET_PROJECTS = "User/GET_PROJECTS";
export const setProject = createAction(GET_PROJECTS);

export const LOADING_PROJECT = "User/LOADING_PROJECT";
export const setLoadingProject = createAction(LOADING_PROJECT);

export const CLEAN_UP = "User/CLEAN_UP";
export const cleanUp = createAction(CLEAN_UP);
