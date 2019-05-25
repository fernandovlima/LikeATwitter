import React, { Component } from "react"
import { connect } from "react-redux"
//components
import Tweet from "../components/tweet"
import NewTweet from "../components/NewTweet"

class TweetPage extends Component {
  render() {
    const { id, replies } = this.props
    console.log(this.props)
    return (
      <div>
        <Tweet id={id} />
        {/* <NewTweet id={id} /> */}
        {replies !== 0 && <h2 className="center">Replies</h2>}
        <ul>
          {replies.map(replyId => (
            <li key={replyId}>
              <Tweet id={replyId} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, tweets, users }, props) {
  const { id } = props.match.params

  return {
    id,
    replies: !tweets[id]
      ? []
      : tweets[id].replies.sort(
          (a, b) => tweets[b].timestamp - tweets[a].timestamp
        )
  }
}

export default connect(mapStateToProps)(TweetPage)
