import React from "react";

export default function Loader() {
  return (
    <div id="loader">
      <div className="loader-content"></div>
    </div>
  );
}

// import React, { Component } from "react";
// import { withRouter } from "react-router-dom";
// import PageAnime from "./PageAnime";

// class Loader extends Component {
//   componentDidUpdate(prevProps) {
//     if (this.props.location !== prevProps.location) {
//       PageAnime();
//     }
//   }

//   render() {
//     return (
//       <>
//         <div id="loader">
//           <div className="loader-content"></div>
//         </div>
//       </>
//     );
//   }
// }

// export default withRouter(Loader);
