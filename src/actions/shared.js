import { getInitalData } from "../utils/api";
//actions
import { receiveUsers } from "../actions/users";
import { receiveTweets } from "../actions/tweets";

export function handleInitialData() {
  return dispatch => {
    return getInitalData().then(({ users, tweets }) => {
      dispatch(receiveTweets(tweets));
      dispatch(receiveUsers(users));
    });
  };
}
