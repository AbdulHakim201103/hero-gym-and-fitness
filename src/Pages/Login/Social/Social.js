import React from "react";
import google from "../../../images/google.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import "./Social.css";
import { useLocation, useNavigate } from "react-router-dom";

const Social = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  let errorElement;

  if (error) {
    errorElement =<div>
      <p className="text-danger text-center">Error: {error.message}</p>
      </div>
    
  }
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <div className="d-flex w-50 my-3 m-auto justify-content-center align-items-center">
        <div className="left me-3"></div>
        <p className="text-success">Or</p>
        <div className="right ms-3"></div>
      </div>
      {errorElement}
      <div className="w-50 m-auto">
        <button onClick={() => signInWithGoogle()} className="btn border border-danger mb-5 w-100">
          <img className="me-3" src={google} width="30px" alt="" /> Continue With Google
        </button>
      </div>
    </div>
  );
};

export default Social;
