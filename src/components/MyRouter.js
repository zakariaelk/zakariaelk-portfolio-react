import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import DefaultPage from "./DefaultPage";
import ProjectDetails from "./pages/ProjectDetails";

export default function MyRouter(props) {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />

        {/* <Route
          path="/"
          exact
          render={(props) => {
            <Home {...props} project={data.projects} />;
          }}
        /> */}

        <Route
          path="/work/:id"
          exact
          render={(routerProps) => {
            return <ProjectDetails {...routerProps} projects={props.projects} />;
          }}
        />

        <Route component={DefaultPage} />
      </Switch>
    </Router>
  );
}
