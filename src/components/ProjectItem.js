import React from "react";
import { Link } from "react-router-dom";

export default function ProjectItem(props) {
  return (
    <>
      <div className={`project-container ${props.id % 2 !== 0 ? `inverted` : ``}`}>
        <figure className="project-visual">
          <Link to={`/work/${props.path}`} slug={props.path}>
            <img className="img-1" src={`img/jpg/${props.image1}`} />
            <img className="img-2" src={`img/jpg/${props.image2}`} />
          </Link>
        </figure>

        <div className="project-text">
          <h3 className="project-title">{props.title}</h3>
          <div className="project-tags">
            {props.tags.map((tag, key) => {
              return key === props.tags.length - 1 ? <span key={key}>{tag} </span> : <span key={key}>{tag}, </span>;
            })}
          </div>
          <p className="desc">{props.excerpt}</p>
          <Link to={`/work/${props.path}`} slug={props.path} className="project-action">
            learn more
          </Link>
        </div>
      </div>
    </>
  );
}
