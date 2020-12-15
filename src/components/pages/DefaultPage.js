import React, { useEffect } from "react";
import PageAnime from "../PageAnime";
import { Link } from "react-router-dom";

export default function DefaultPage() {
  useEffect(() => {
    PageAnime();
  }, []);

  return (
    <>
      <div className="error-wrapper">
        <div className="boxed">
          <h1 className="error-txt">
            Whoops! There must be a better option => <Link to="/"> here</Link>
          </h1>
        </div>
      </div>
    </>
  );
}
