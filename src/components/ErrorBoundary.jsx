import React, { Component } from "react";

import Whoops from "./Whoops";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.errorInfo) {
      return <Whoops />;
    }
    return this.props.children;
  }
}
