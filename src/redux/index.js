// create store
import { createStore as _createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import { create as createApi } from "./apiClient/index";

import rootReducer from "./modules/index";

const __DEVELOPMENT__ = process.env.NODE_ENV === "development";

export const createStore = () => {
  const storeFactory = applyMiddleware(
    createLogger(),
    thunk.withExtraArgument(createApi())
  )(_createStore);

  if (__DEVELOPMENT__) {
    return storeFactory(
      rootReducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  }

  return storeFactory(rootReducer);
};
