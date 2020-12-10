import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Loader from "../components/Loader";

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return <React.Fragment />;
  }
}

export default withRouter(ScrollToTop);
