import "./styles/index.scss";
import React from "react";
import ReactDOM from "react-dom";

import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";

// Provider is wrap our app
import { Provider } from "react-redux";

import { createStore as configureStore } from "./redux";

// inject client via redux thunk
const store = configureStore();

// wrap my app with Provider from react-redux which injected with my store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
