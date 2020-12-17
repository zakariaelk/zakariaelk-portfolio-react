import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PageAnime from "./PageAnime";

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
      PageAnime();
    }
  }

  render() {
    return <React.Fragment />;
  }
}

export default withRouter(ScrollToTop);
