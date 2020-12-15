import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import DefaultPage from "./components/pages/DefaultPage";
import ProjectDetails from "./components/pages/ProjectDetails";
import projectsData from "./data/projects-data";
import "./assets/fonts/cerapro/cerapro-bold.woff";
import "./assets/fonts/cerapro/cerapro-medium.woff";
import "./assets/fonts/cerapro/cerapro-regular.woff";
import "./assets/fonts/cerapro/cerapro-light.woff";
import "./assets/css/main.css";
import Loader from "./components/Loader";
import PageAnime from "./components/PageAnime";

function App() {
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
