import React, { Component } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { handleAddTweet } from "../actions/tweets"

class NewTweet extends Component {
  state = {
    text: "",
    toHome: false
  }

  handleChange = e => {
    const text = e.target.value

    this.setState({
      text
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { text } = this.state
    const { dispatch, id } = this.props
    dispatch(handleAddTweet(text, id))
    this.setState({
      text: "",
      toHome: id ? false : true
    })
  }
  render() {
    const { text, toHome } = this.state
    const tweetLength = 280 - text.length

    if (toHome === true) {
      return <Redirect to="/" />
    }
    return (
      <div>
        <h2 className="center">Compose New Tweet </h2>
        <form className="new-tweet" onClick={this.handleSubmit}>
          <textarea
            placeholder="What's happening??"
            value={text}
            onChange={this.handleChange}
            className="textarea"
            maxLength={280}
          />
          {tweetLength <= 100 && (
            <div className="tweet-length">{tweetLength}</div>
          )}
          <button className="btn" type="submit" disabled={text === ""}>
            Submit Tweet
          </button>
        </form>
      </div>
    )
  }
}

export default connect()(NewTweet)
