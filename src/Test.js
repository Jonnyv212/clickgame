import React, { Component } from "react";

class Test extends Component {
  render() {
    return <div>Your name is {this.props.user.name}</div>;
  }
}

export default Test;
