import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
// import { config } from "./config";
import { colors } from "./colors";
import { reducer as notificationsReducer } from "reapop";
import AuthenReducer from "../Page/Login/reducer";
import ComponentReducer from "../Component/reducer";
import ProfileReducer from "../Page/Profile/reducer";
// const rootReducer = combineReducers({
//   config,
//   colors,
//   router: routerReducer,
//   notifications: notificationsReducer(),
// });
const appReducer = combineReducers({
  colors,
  router: routerReducer,
  notifications: notificationsReducer(),
  state: (state = {}) => state,
  authen: AuthenReducer,
  config: ComponentReducer,
  profile: ProfileReducer,
});

const rootReducer = (state, action) => {
  // Clear all data in redux store to initial.
  // if (action.type === DESTROY_SESSION) state = undefined;
  return appReducer(state, action);
};
export default rootReducer;
