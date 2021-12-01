import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DelayLink from "react-delay-link";
import RevealWork from "../RevealWork";
import PageAnime from "../PageAnime";
import { workInitLoad } from "../InitLoad";

export default function ProjectDetails(props) {
  const { projects, match } = props;
  const postId = Object.entries(projects).filter((entry, key) => {
    if (entry[1].slug === match.params.id) {
      return entry;
    }
  });

  let currentPathName = props.location.pathname;
  const [url, setURL] = useState({ projectUrl: currentPathName });

  useEffect(() => {
    workInitLoad();
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
  }, []);

  /* Redirecting to Home if project slug is incorrect */
  if (postId.length === 0) {
    window.location.replace("/");
  }

  /* Redirecting to Home if project slug is incorrect */

  const currentPostID = postId[0][0];
  const currentPost = postId[0][1];
  const nextPostID = parseInt(currentPostID) + 1;
  const nextPost = projects[nextPostID];

  return (
    <>
      <div id="work">
        <section id="project-hero">
          <div className="hero-content boxed-wide">
            <div className="container-l">
              <div className="col-4 banner-txt">
                <h1>{currentPost.title}</h1>
                <p className="desc">{currentPost.excerpt}</p>
              </div>
              <div className="col-8 banner-visual">
                <img src={`../../img/jpg/${currentPost.image2}`} alt={currentPost.title} />
              </div>
            </div>
            <i className="scroll-indic">&gt;</i>
          </div>
        </section>

        <section id="project-info">
          <div className="info-content boxed-wide">
            <div className="container-l">
              <div className="col-4 info-title">
                <h2>Context</h2>
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
                      <a href={`${currentPost.site}`} target="_blank">
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
                  <img src={`../../img/jpg/${visual}`} />
                </figure>
              );
            })}
          </div>
        </section>

        {parseInt(postId[0][0]) === projects.length - 1 ? (
          <Link className="next-post-nav" to="/" onClick={workInitLoad}>
            <div className="next-link" data-label="more work">
              back to
            </div>
            <div className="next-label" data-label="see here">
              work
            </div>
          </Link>
        ) : (
          <Link className="next-post-nav" to={`/work/${nextPost.slug}`}>
            <DelayLink delay={500} to={`/work/${nextPost.slug}`} clickAction={workInitLoad} replace={false} className="next-post-nav">
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
