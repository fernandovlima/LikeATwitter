import { combineReducers } from "redux";
//reducers
import authedUser from "./authedUser";
import users from "./users";
import tweets from "./tweets";
//loading bar
import { loadingBarReducer } from "react-redux-loading";

export default combineReducers({
  authedUser,
  users,
  tweets,
  loading: loadingBarReducer
});
