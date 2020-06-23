// import { createStore, applyMiddleware, compose } from "redux";
// import promiseMiddleware from "redux-promise-middleware";
// import { routerMiddleware } from "react-router-redux";
// import thunk from "redux-thunk";
// import history from "./history";
// import rootReducer from "./reducers/index";

// const middleware = routerMiddleware(history);

// export default function configureStore() {
//   const createStoreWithMiddleware = compose(
//     applyMiddleware(middleware, thunk, promiseMiddleware())
//   )(createStore);

//   const store = createStoreWithMiddleware(rootReducer);

//   if (module.hot) {
//     module.hot.accept("./reducers", () => {
//       const nextRootReducer = require("./reducers/index");
//       store.replaceReducer(nextRootReducer);
//     });
//   }
//   return store;
// }
// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import reducers from "../reducers";

// const store = createStore(reducers, {}, applyMiddleware(thunk));

// export default store;
// import { applyMiddleware, compose, createStore } from "redux";
// import thunk from "redux-thunk";
// import logger from "redux-logger";
// import reducer from "./reducers";

// const middleware = compose(applyMiddleware(thunk, logger));

// const store = createStore(reducer, {}, middleware);

// if (module.hot) {
//   module.hot.accept("./reducers", () => {
//     const nextRootReducer = require("./reducers").default;
//     store.replaceReducer(nextRootReducer);
//   });
// }

// export default store;
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const configureStore = (preloadedState) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk)
  );

  if (module.hot) {
    module.hot.accept("./reducers", () => {
      const nextRootReducer = require("./reducers").default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
