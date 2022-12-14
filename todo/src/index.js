import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./redux/Store";

import App from "./App";

const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  rootEl
);
