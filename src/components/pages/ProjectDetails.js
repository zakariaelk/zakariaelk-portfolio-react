import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { Link } from "react-router-dom";
import DelayLink from "react-delay-link";
import RevealWork from "../RevealWork";
import PageAnime from "../PageAnime";

function initLoad() {
  const loader = document.querySelector("#loader");
  const bannerTxt = document.querySelector(".banner-txt");
  const bannerVisual = document.querySelector(".banner-visual");

  loader.classList.remove("off");
  bannerTxt.classList.remove("on");
  bannerVisual.classList.remove("on");
}

export default function ProjectDetails(props) {
  let projectsData;
  let localStorageRef = localStorage.getItem("projects");

  const firebaseConfig = {
    apiKey: "AIzaSyCV96Bp-JVn11VFaTSJiaNgrgaLXFl8zR4",
    authDomain: "zakariaelk-portfolio.firebaseapp.com",
    projectId: "zakariaelk-portfolio",
    storageBucket: "zakariaelk-portfolio.appspot.com",
    messagingSenderId: "185022383867",
    appId: "1:185022383867:web:6dd3dc380b8251001e525e",
    measurementId: "G-FNG39Z67V0",
  };

  // GET DATA
  const gotData = (projectsRef) => {
    const projects = projectsRef.val();
    projectsData = projects;
    console.log(projectsData);
    localStorage.setItem("projects", JSON.stringify(projectsData));
  };

  //ERR DATA
  const errData = (error) => {
    console.log(error);
  };

  // FETCHING DATA

  function fetchData() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    const database = firebase.database();
    console.log(database);

    const projectsRef = database.ref("projects");
    projectsRef.limitToFirst(10).on("value", gotData, errData);
  }

  if (localStorageRef !== null) {
    console.log("setting state with localstorage Data");
    projectsData = JSON.parse(localStorageRef);
  } else {
    console.log("Fetching Data");
    fetchData();
  }

  const { projects, match } = props;

  const postId = Object.entries(projects).filter((entry, key) => {
    if (entry[1].slug === match.params.id) {
      return entry;
    }
  });

  let currentPathName = props.location.pathname;
  const [url, setURL] = useState(currentPathName);

  useEffect(() => {
    initLoad();
    console.log("Use effect");
    PageAnime();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      const visualItem = document.querySelectorAll(".visual-figure img");

      RevealWork(visualItem);

      return () => {
        window.removeEventListener("scroll");
      };
    });
  });

  /* Redirecting to Home if project slug is incorrect */
  if (postId.length === 0) {
    window.location.replace("/");
  }

  /* Redirecting to Home if project slug is incorrect */
  const currentPostID = postId[0][0];
  const currentPost = postId[0][1];
  const nextPostID = parseInt(currentPostID) + 1;
  const nextPost = projects[nextPostID];

  if (gotData) {
    return (
      <>
        <div id="work">
          <section id="project-hero">
            <div className="hero-content boxed">
              <div className="container-l">
                <div className="col-4 banner-txt">
                  <h1>{currentPost.title}</h1>
                  <p className="desc">{currentPost.excerpt}</p>
                </div>
                <div className="col-8 banner-visual">
                  <img src={`../img/jpg/${currentPost.image2}`} alt={currentPost.title} />
                </div>
              </div>
              <i className="scroll-indic">&gt;</i>
            </div>
          </section>

          <section id="project-info">
            <div className="info-content boxed">
              <div className="container-l">
                <div className="col-4 info-title">
                  <h2>What i did</h2>
                </div>
                <div className="col-8 info-details">
                  <div className="info-intro">{currentPost.intro}</div>

                  <div className="info-list-container">
                    <div className="info-list">
                      <span className="list-title">services</span>
                      <div className="list-details">
                        <ul>
                          {currentPost.categories.map((catname, key) => {
                            return <li key={key}>{catname}</li>;
                          })}
                        </ul>
                      </div>
                    </div>
                    <div className="info-list">
                      <span className="list-title">year</span>
                      <div className="list-details">{currentPost.year} </div>
                    </div>

                    <div className="info-list">
                      <span className="list-title">take a look</span>
                      <div className="list-details site-link">
                        <a href={`http://${currentPost.site}`} target="_blank">
                          {currentPost.site}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="project-visuals">
            <div className="visual-content boxed">
              {currentPost.visuals.map((visual, key) => {
                return (
                  <figure className="visual-figure" key={key}>
                    <img src={`../img/jpg/full/${visual}`} />
                  </figure>
                );
              })}
            </div>
          </section>

          {parseInt(postId[0][0]) === projects.length - 1 ? (
            <Link className="next-post-nav" to="/" onClick={initLoad}>
              <div className="next-link" data-label="more work">
                back to
              </div>
              <div className="next-label" data-label="see here">
                work
              </div>
            </Link>
          ) : (
            <Link className="next-post-nav" to={`/work/${nextPost.slug}`}>
              <DelayLink delay={500} to={`/work/${nextPost.slug}`} clickAction={initLoad} replace={false} className="next-post-nav">
                <div className="next-link" data-label="more work">
                  up next
                </div>
                <div className="next-label" data-label="see here">
                  {nextPost.title}
                </div>
              </DelayLink>
            </Link>
          )}
        </div>
      </>
    );
  }
}
