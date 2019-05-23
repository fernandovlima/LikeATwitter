import { getInitalData } from "../utils/api";
//actions creaters
import { receiveUsers } from "../actions/users";
import { receiveTweets } from "../actions/tweets";
import { setAuthedUser } from "../actions/authedUser";

const AUTHED_ID = "dan_abramov";
export function handleInitialData() {
  return dispatch => {
    return getInitalData().then(({ users, tweets }) => {
      dispatch(receiveTweets(tweets));
      dispatch(receiveUsers(users));
      dispatch(setAuthedUser(AUTHED_ID));
    });
  };
}
