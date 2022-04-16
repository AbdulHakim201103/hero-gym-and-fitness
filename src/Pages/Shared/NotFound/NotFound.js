import React from "react";
import "./NotFound.css";
import notfound from "../../../images/notfound.webp";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <img src={notfound} alt="" />
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <Link className="btn btn-success " to="/">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
