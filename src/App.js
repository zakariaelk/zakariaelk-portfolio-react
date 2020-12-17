import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FetchData, { gotData } from "./components/FetchData";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import DefaultPage from "./components/DefaultPage";
import ProjectDetails from "./components/pages/ProjectDetails";
import Loader from "./components/Loader";
import "./assets/fonts/cerapro/cerapro-bold.woff";
import "./assets/fonts/cerapro/cerapro-medium.woff";
import "./assets/fonts/cerapro/cerapro-regular.woff";
import "./assets/fonts/cerapro/cerapro-light.woff";
import "./assets/css/main.css";

function App() {
  let projectsData;
  let localStorageRef = localStorage.getItem("projects");

  if (localStorageRef !== null && localStorageRef !== undefined) {
    console.log("setting state with localstorage Data");
    projectsData = JSON.parse(localStorageRef);
  } else {
    console.log("Fetching Data");
    FetchData();
  }

  return (
    <>
      <Router>
        <Loader />
        <ScrollToTop />

        <div className="site-wrapper">
          <Header />

          <main className="page-content">
            <Switch>
              <Route path="/" exact component={Home} />

              <Route
                path="/work/:id"
                exact
                render={(routerProps) => {
                  return <ProjectDetails {...routerProps} projects={projectsData} />;
                }}
              />

              <Route component={DefaultPage} />
            </Switch>
          </main>

          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
