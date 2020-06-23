import { createAction } from "redux-actions";

export const LOADING = "Authen/LOADING";
export const IS_LOGIN = "Authen/IS_LOGIN";

export const setLoading = createAction(LOADING);
export const setIsLogin = createAction(IS_LOGIN);
