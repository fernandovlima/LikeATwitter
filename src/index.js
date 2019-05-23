import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
//store
import { createStore } from "redux";
import { Provider } from "react-redux";
//reducer
import reducer from "./reducers";

//create store
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
