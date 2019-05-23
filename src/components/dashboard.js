import React, { Component } from "react";
//connect
import { connect } from "react-redux";
class Dashboard extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <h2 className="center">Your Timeline</h2>
        <ul className="dashboard-list">
          {this.props.tweetsId.map(id => (
            <li key={id}>
              <div>Tweet ID: {id}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ tweets }) {
  return {
    tweetsId: Object.keys(tweets).sort(
      (a, b) => tweets[b].timestamp - tweets[a].timestamp
    )
  };
}

export default connect(mapStateToProps)(Dashboard);
