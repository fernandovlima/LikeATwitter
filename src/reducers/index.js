import { combineReducers } from "redux";
//reducers
import { authedUser } from "./authedUser";
import { users } from "./users";
import { tweets } from "./tweets";

export default combineReducers({
  authedUser,
  users,
  tweets
});
