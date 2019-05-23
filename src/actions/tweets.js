export const RECEIVED_TWEETS = "RECEIVE_TWEETS";

export function receivedTweets(tweets) {
  return { type: RECEIVE_TWEETS, tweets };
}
