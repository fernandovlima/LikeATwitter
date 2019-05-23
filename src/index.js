import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
//store
import { createStore } from "redux";
import { Provider } from "react-redux";
//reducer
import reducer from "./reducers";
//middleware
import middleware from "./middleware";

//create store
const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
